const mysql = require('mysql2/promise');
const config = require('../config');

const pool = mysql.createPool(config.db);

async function query(sql) {
  const [rows] = await pool.execute(sql);
  return rows;
}

module.exports = {
  query
}