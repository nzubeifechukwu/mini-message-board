#! /usr/bin/env node

const { Client } = require("pg");

require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  message VARCHAR ( 255 ),
  date_added TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);
`;

async function main() {
  console.log("seeding...");

  const client = new Client({
    connectionString: process.env.CONNECTION_STRING || process.env.DATABASE_URL,
  });

  await client.connect();
  await client.query(SQL);
  await client.end();

  console.log("done");
}

main();
