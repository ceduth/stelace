require('dotenv').config()
console.log("Environment is ", process.env.NODE_ENV);

module.exports = {

  client: 'pg',
  connection: {
    connectionString: process.env.POSTGRES_URL,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_PORT,
    ssl: process.env.PGSSLMODE ? { rejectUnauthorized: false } : false,
  },
  migrations: {
    tableName: 'knex_migrations'
  }

}
