# Build stage for Litestream
FROM golang:alpine AS litestream

# Install build dependencies
RUN apk add --no-cache git build-base

# Set the working directory outside of GOPATH to enable the Go modules feature
WORKDIR /src

# Clone the Litestream repository
RUN git clone https://github.com/benbjohnson/litestream.git /src/litestream

# Build Litestream
RUN cd /src/litestream && \
    GOOS=linux GOARCH=arm64 go build -o /litestream ./cmd/litestream

FROM node:lts-alpine AS base
WORKDIR /app

# Copy the Litestream binary from the build stage
COPY --from=litestream /litestream /usr/local/bin/litestream

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