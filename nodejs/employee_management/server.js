// express
// mysql
// body-parser
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const PORT = 3000;
const tableName = "employee";
const amountEachPage = 5;

const app = express();
app.use(bodyParser.json());

const dbConnect = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    port: 3306,
    database: "employee_management"
});

// app.get('/employees', (req, res) => {
//     console.log(`Get All`);
//     let sqlGetEmployees = 'SELECT * FROM employee';
//     dbConnect.query(sqlGetEmployees, (err, result) => {
//         if (err) throw err;
//         res.send(result);
//     });
// })

app.get("/employees/:id", (req, res) => {
    const selectedEmployeeId = req.params.id;
    const sqlGetEmployeeById = `SELECT * FROM ${tableName} WHERE id = ${selectedEmployeeId}`;
    dbConnect.query(sqlGetEmployeeById, (err, result) => {
        if (err) throw err;
        res.send(result);
    })
});

app.post('/employees', (req, res) => {
    const sqlAddEmployee = `INSERT INTO ${tableName} (name, age, salary) VALUES ?`;
    const newEmployee = [
        [
            req.body.name,
            req.body.age,
            req.body.salary
        ]
    ]
    dbConnect.query(sqlAddEmployee, [newEmployee], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});
// Modify employee 
app.put('/employees', (req, res) => {
    console.log('update employee');
    let sql = `UPDATE ${tableName} SET name="${req.body.name}"\, age=${req.body.age}\, salary=${req.body.salary} WHERE id=${req.body.id}`;
    dbConnect.query(sql, (err) => {
        if (err) throw err;
        res.send(`Updated employee`);
    });
});
// delete employee
app.delete('/employees', (req, res) => {
    var sql = `DELETE FROM ${tableName} WHERE id=${req.body.id}`;
    dbConnect.query(sql, (err, result) => {
        if (err) throw err;
        res.send(`Deleted employee`);
    });
})

dbConnect.connect(err => {
    if (err) throw err;
    console.log(`Database was connected`);
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    });
})
// function to get param
const getParamURL = (urlString) => {
    // get query
    let queryString = urlString.split('?')[1];
    let arr = queryString.split('&');
    let params = {};
    for (element of arr) {
        console.log(`element-${element}`);
        let arr_param = element.split('=');
        params[arr_param[0]] = arr_param[1];
    }

    return params;
}
// localhost:8080/employees?name=a&page=2
app.get('/employees?', (req, res) => {
    console.log(`Get employee with condition`);
    let param = getParamURL(req.url);
    let sql = `SELECT * FROM ${tableName} WHERE name LIKE '%${param["name"]}%'`;
    dbConnect.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results.slice(amountEachPage * (param["page"] - 1), amountEachPage * param["page"]));
    });
});