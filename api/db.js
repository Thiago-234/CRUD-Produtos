import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysqlnopc123#",
    database: "produtos"
})