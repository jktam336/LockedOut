const { Pool } = require("pg");
require ('dotenv').config()

const PG_URI = process.env.PGURI;

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
