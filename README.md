# Tiny Stack

![thumbnail](https://github.com/Sh4yy/tiny-stack/assets/23535123/d33b50cd-ca17-4a39-9154-237442fc6c8a)

A simple and tiny stack for building web applications using [Astro](https://astro.build), [SQLite](https://www.sqlite.org/index.html), and [Litestream](https://litestream.io).

## Tutorial

[Here](https://logsnag.com/blog/the-tiny-stack) is a thorough tutorial on the Tiny Stack.

## Quick Start

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
