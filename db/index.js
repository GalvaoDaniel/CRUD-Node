const { Pool } = require('pg');
 
const pool = new Pool({
    user: 'crud_application',
    host: 'localhost',
    database: 'crudDB',
    password: 'abcd1234',
    port: 5432,
  });
 
module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
}