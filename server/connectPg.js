const { Pool } = require('pg');

//connecting to database
const PG_URI = 'postgres://jbnmpjgr:d6yNv3TF8Vop3tRjCt6PXjAE7i-7Jcto@isilo.db.elephantsql.com/jbnmpjgr';

const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};