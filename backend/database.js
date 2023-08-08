const MySQL = require('mysql2');

const database = MySQL.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test_spek_laptop'
});

database.connect((error) => {
    if(error) {
        console.error("Error Connecting to database: ", error);
    } else {
        console.log("Connected to the database.");
    }
});

module.exports = database;