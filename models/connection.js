var pg = require('pg');
const connectionString = "postgres://root:password@localhost:5432/students" //SUBSTITUIR COM OS DADOS DO POSTGRESQL
const Pool = pg.Pool
const pool = new Pool({
 connectionString,
 max: 10,
 ssl: {
 require: true,
 rejectUnauthorized: false
 }
})
module.exports = pool;