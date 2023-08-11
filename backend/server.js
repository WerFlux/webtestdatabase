const express = require('express');
const database = require('./database');
const cors = require('cors');

const server = express();
const port = 5000;

server.use(cors());
server.use(express.json());

// API Insert Laptop Baru
server.post('/api/insert_new_laptop', (req, res) => {
  const merk = req.body.selectedMerk;
  const spek = req.body.spesifikasi;
  const nota = req.body.nota;

  const laptopTable = process.env.LAPTOP_DATA_TABLE;

  const query = 'INSERT INTO ?? (Merk, Spesifikasi, Nota) VALUES (?, ?, ?)';
  database.query(query, [laptopTable, merk, spek, nota], (err, results) => {
    if(err) {
      res.status(500).json({ error: 'Database Error' });
    }
    const insertedId = results.insertId;
    res.json({ laptopId: insertedId });
  });
});

// API Delete Laptop
server.post('/api/delete_laptop', (req, res) => {
  const laptopId = req.body.laptopId;
  const laptopTable = process.env.LAPTOP_DATA_TABLE;
  
  if (!laptopTable) {
    res.status(500).json({ error: 'Laptop table not specified in environment' });
    return;
  }
  
  const is_exist_query = 'SELECT * FROM ?? WHERE `ID`=?';
  database.query(is_exist_query, [laptopTable, laptopId], (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Database Error' });
    } else {
      if (results.length === 0) {
        res.json({ status: false });
      } else {
        const delete_query = 'DELETE FROM `laptop` WHERE `ID`=?';
        database.query(delete_query, [laptopId], (deleteErr, deleteResult) => {
          if (deleteErr) {
            res.status(500).json({ error: 'Table Deletion Error' });
          } else {
            res.json({ status: true });
          }
        });
      }
    }
  });
});

// API Find Laptop
server.post('/api/find_laptop', (req, res) => {
  const laptopId = req.body.findId;
  const laptopTable = process.env.LAPTOP_DATA_TABLE;

  const query = 'SELECT * FROM ?? WHERE `ID`=?';
  database.query(query, [laptopTable, laptopId], (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Database Error' });
    } else {
      if (results.length === 0) {
        res.json({ status: false });
      } else {
        res.json({ status: true, laptops: results });
      }
    }
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});