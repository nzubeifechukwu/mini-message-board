const { Pool } = require("pg");

require("dotenv").config();

module.exports = new Pool({
  // host: process.env.PGHOST,
  // user: process.env.POSTGRES_USER,
  // database: process.env.POSTGRES_DB,
  // password: process.env.POSTGRES_PASSWORD,
  // port: process.env.PGPORT,
  connectionString: process.env.CONNECTION_STRING || process.env.DATABASE_URL,
});
