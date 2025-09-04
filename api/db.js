import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "usuariodb",
    password: "senhadb",
    database: "nomedb"
})