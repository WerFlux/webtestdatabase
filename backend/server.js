const express = require('express');
const database = require('./database');
const cors = require('cors');

const server = express();
const port = 5000;

server.use(cors());
server.use(express.json());

// API Insert Laptop Baru
server.post('/api/insert_new_laptop', (req, res) => {
  const newMerk = req.body.text;
  const query = 'INSERT INTO laptop (Merk) VALUES (?)';
  
  database.query(query, [newMerk], (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Database Error' });
    } else {
      res.json({ message: 'Insert Berhasil' });
    }
  });
});

// API Find Laptop
server.post('/api/find_laptop', (req, res) => {
  const merk = req.body.text;
  const query = 'SELECT * FROM `laptop` WHERE Merk=?';

  database.query(query, [merk], (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Database Error' });
    } else {
      results.forEach(row => {
        console.log('ID:', row.ID, 'Merk:', row.Merk);
      });

      res.json({ message: 'Find Berhasil!', laptops: results });
    }
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});