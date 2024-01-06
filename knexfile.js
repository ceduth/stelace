require('dotenv').config()
const PROD = process.env.NODE_ENV === 'production'

console.log('XXXXXXXXXXXXXXXXXXXXXXX PROD is', PROD)
module.exports = {

  client: 'pg',
  connection: {
    connectionString: process.env.POSTGRES_URL,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_PORT,
    ssl: PROD ? { rejectUnauthorized: false } : false,
  },
  migrations: {
    tableName: 'knex_migrations'
  }

}
