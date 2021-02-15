const db = require('../services/db');

async function getMultiple(){
  const data = await db.query('SELECT * FROM test')
  
  return {
    data
  }
}

module.exports = {
  getMultiple
}