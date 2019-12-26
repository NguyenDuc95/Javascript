const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// var users;

app.use(bodyParser.json());
app.listen(8080, (err) => {
    if (err) throw err;
    console.log(`Server started on port 8080`);
});

var conn = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'testsql'
    }
);
// connect to sql
conn.connect((err) => {
   
    if (err) throw err;
    console.log(`connect to sql`);
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
app.get('/employees/:employeeId', (req, res) => {
    let sql = `SELECT * FROM persons WHERE id=${req.params.employeeId}`;
    conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});
app.post('/employees/create', (req, res) => {
    // res.send(JSON.stringify(req.body));
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
// get param, gia su it valid
const getParamURL=(urlString)=>{
    // get query
    let queryString = urlString.split('?')[1];
    let arr = queryString.split('&');
    let params = {};
    for(element of arr){
        console.log(`element-${element}`);
        let arr_param= element.split('=');
        params[arr_param[0]]= arr_param[1];
    }
    return params;
}
// localhost:8080/employees?name=a&page=2
app.get('/employeesdata?', (req, res) => {
    // res.send(getParamURL(`param: ${req.url}`));
    // console.log(`url: ${req.url}`);
    let sql = `SELECT * FROM persons WHERE name LIKE '%hoang%'`;
    conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});
