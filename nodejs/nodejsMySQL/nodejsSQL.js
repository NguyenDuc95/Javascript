const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var users;

app.use(bodyParser.json());
app.listen(8080, (err) => {
    if (err) throw err;
    console.log(`Server started on port 3000`);
});

var conn = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'testSQL'
    }
);
// connect to sql
conn.connect((err) => {
    console.log(`connect to sql`);
    if (err) throw err;
    //create table
    let sql = "CREATE TABLE IF NOT EXISTS persons (id INTEGER, name text)";
    conn.query(sql, (err_table) => {
        if (err_table) throw err_table;
    });

});
app.get('/employees', (req, res) => {
    let sql = "SELECT * FROM persons";
    conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});
app.get('/employees/view/:id', (req, res) => {
    let sql = `SELECT * FROM persons WHERE id=${req.params.id}`;
    conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});
app.post('/employees/create', (req, res) => {
    res.send(JSON.stringify(req.body));
    let sql = `INSERT INTO persons(id,name) VALUES (${req.body.id},"${req.body.name}")`;
    conn.query(sql, (err) => {
        if (err) throw err;
        console.log('create a new record');
    });
});
app.put('/employees/update', (req, res) => {
    res.send(JSON.stringify(res.body));
    // UPDATE table_name SET name=value1, col_2=value2
    let sql = `UPDATE persons SET name="${req.body.name}" WHERE id=${req.body.id}`;
    conn.query(sql, (err) => {
        if (err) throw err;
    });
});

