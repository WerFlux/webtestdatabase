const MySQL = require('mysql2');
require('dotenv').config();

const database = MySQL.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
});

database.connect((error) => {
    if(error) {
        console.error("Error Connecting to database: ", error);
    } else {
        console.log("Connected to the database.");
    }
});

module.exports = database;