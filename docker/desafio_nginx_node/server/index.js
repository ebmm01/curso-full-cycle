const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

connection.query("CREATE TABLE IF NOT EXISTS people(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100) NOT NULL)")


app.get('/', async (req,res) => {
    connection.query(`INSERT INTO people(name) values('Elias Bernardo')`, (err, _) => {
        connection.query(`SELECT name from people`, (err, result, fields) => {
            res.send("<h1>Full Cycle Rocks!</h1>" + result.map(({name}) => `${name},`))
        })
    })

})

app.listen(port, ()=> {
    console.log('API rodando!')
})

process.on('exit', () => {
    console.log('Finalizando conexão com a base...')
    connection.end()
})