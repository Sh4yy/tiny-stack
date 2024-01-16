FROM golang:alpine3.18 as litestream

WORKDIR /usr/src/

RUN apk add --no-cache git make musl-dev gcc

# build litestream
RUN git clone https://github.com/benbjohnson/litestream.git litestream
RUN cd litestream ; go install ./cmd/litestream

RUN cp $GOPATH/bin/litestream /usr/src/litestream

FROM node:lts-alpine AS base
WORKDIR /app

# Install litestream
COPY --from=litestream /usr/src/litestream /usr/local/bin/litestream
RUN chmod +x /usr/local/bin/litestream

COPY package.json package-lock.json ./

FROM base AS build
RUN npm ci

COPY . .
RUN npm run build

FROM base AS runtime

COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

# Move the drizzle directory to the runtime image
COPY --from=build /app/drizzle ./drizzle

# Move the run script and litestream config to the runtime image
COPY --from=build /app/scripts/run.sh run.sh
COPY --from=build /app/litestream.yml /etc/litestream.yml

# Create the data directory for the database
RUN mkdir -p /data

ENV HOST=0.0.0.0
ENV PORT=4321
ENV NODE_ENV=production
EXPOSE 4321
CMD ["sh", "run.sh"]