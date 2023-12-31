# Tiny Stack

A simple and tiny stack for building web applications using: Astro, SQLite, and Litestream.

## Getting Started

1. Build the Docker image

```bash
docker build -t tiny-stack .
```

2. Set environment variables

```bash
export REPLICA_URL=https://<bucket_id>.r2.cloudflarestorage.com
export LITESTREAM_ACCESS_KEY_ID=access_key_id
export LITESTREAM_SECRET_ACCESS_KEY=secret_access_key
```

3. Run the Docker image

```bash
docker run \                                                
  -p 4321:4321 \
  -e REPLICA_URL \
  -e LITESTREAM_ACCESS_KEY_ID \
  -e LITESTREAM_SECRET_ACCESS_KEY \
  -v $(pwd)/data:/data \
  tiny-stack
```

4. Head to http://localhost:4321