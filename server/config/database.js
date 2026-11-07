const mysql = require('mysql2');
const path = require('path');
require('dotenv').config();
require('dotenv').config({ path: path.join(__dirname, '../.env') });
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

const db = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'snapfun_erp',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

db.query('SELECT 1', (err) => {
  if (err) console.error('MySQL pool init failed:', err);
  else console.log('MySQL pool ready');
});

module.exports = db;
