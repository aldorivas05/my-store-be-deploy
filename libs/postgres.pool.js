const { configs } = require('eslint-plugin-prettier');
const { Pool } = require('pg')
// const { host, port, user, password, database } = require('pg/lib/defaults')
const { config } = require('./../config/config')

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;




const pool = new Pool({ connectionString: URI });

module.exports = pool;
 