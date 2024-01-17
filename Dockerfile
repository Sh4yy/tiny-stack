FROM node:lts-alpine AS base
WORKDIR /app

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

# Move the litestream binary to the runtime image from the litestream image
# You can use a specific version of litestream by changing the tag
# COPY --from=litestream/litestream:0.3.13 /usr/local/bin/litestream /usr/local/bin/litestream
COPY --from=litestream/litestream:latest /usr/local/bin/litestream /usr/local/bin/litestream

# Move the run script and litestream config to the runtime image
COPY --from=build /app/scripts/run.sh run.sh
RUN chmod +x run.sh

COPY --from=build /app/litestream.yml /etc/litestream.yml

# Create the data directory for the database
RUN mkdir -p /data

ENV HOST=0.0.0.0
ENV PORT=4321
ENV NODE_ENV=production
EXPOSE 4321
CMD ["sh", "run.sh"]