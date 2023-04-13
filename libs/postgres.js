const { Client } = require('pg')
// const { host, port, user, password, database } = require('pg/lib/defaults')

async function getConnection() {
    const client = new Client({
        host: 'localhost',
        port: 5432,
        user: 'aldo',
        password: 'admin123',
        database: 'my_store',
    })
    await client.connect();
    return client;
}

module.exports = getConnection;
 
// const res = await client.query('SELECT $1::text as message', ['Hello world!'])
// console.log(res.rows[0].message) // Hello world!
// await client.end()