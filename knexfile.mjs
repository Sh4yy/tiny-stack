const config = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./db/dev.sqlite3"
    },
    migrations: {
      directory: "./db/migrations",
      loadExtensions: ['.mjs']
    },
    seeds: {
      directory: "./db/seeds/dev",
      loadExtensions: ['.mjs']
    },
    useNullAsDefault: true
  },
  production: {
    client: "sqlite3",
    connection: {
      filename: "/data/prod.sqlite3"
    },
    migrations: {
      directory: "./db/migrations",
      loadExtensions: ['.mjs']
    },
    seeds: {
      directory: "./db/seeds/prod",
      loadExtensions: ['.mjs']
    },
    useNullAsDefault: true
  }
};

export default config;

