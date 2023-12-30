#!/bin/bash
set -e

# Restore the database if it does not already exist.
if [ -f /data/prod.sqlite3 ]; then
	echo "Database already exists, skipping restore"
else
	echo "No database found, restoring from replica if exists"
	litestream restore -if-replica-exists /data/prod.sqlite3
fi

# Run Knex migrations here
echo "Running Knex migrations"
npx knex migrate:latest

# Run litestream with your app as the subprocess.
exec litestream replicate -exec "node ./dist/server/entry.mjs"