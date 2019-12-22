var mysql = require('mysql');

console.log('GetConnection...');

var conn = mysql.createConnection(
{
    host:'localhost',
    user:'root',
    password:'1234'
}
);
// connect to sql
conn.connect((err)=>{
    if(err) throw err;
    console.log('connected to sql');
    //  create data base if don't have database
    conn.query("CREATE DATABASE IF NOT EXISTS testSQL",err=>{
        if(err) throw err;
        console.log('Create database');
    });
})
// create database if not exist
