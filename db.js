const config = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: "./db.db"
  }
});

module.exports = config;