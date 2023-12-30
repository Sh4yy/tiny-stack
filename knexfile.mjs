
const base = {
  client: "sqlite3",
  migrations: {
    directory: "./db/migrations",
    loadExtensions: ['.mjs']
  },
  useNullAsDefault: true
}

const config = {
  development: {
    ...base,
    connection: {
      filename: "./db/dev.sqlite3"
    },
    seeds: {
      directory: "./db/seeds/dev",
      loadExtensions: ['.mjs']
    },
  },
  production: {
    ...base,
    connection: {
      filename: "/data/prod.sqlite3"
    },
  }
};

export default config;

