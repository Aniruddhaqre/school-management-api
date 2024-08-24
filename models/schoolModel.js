const db = require('../config/db');

exports.addSchool = async (school) => {
  const { name, address, latitude, longitude } = school;
  await db.query('INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)', 
  [name, address, latitude, longitude]);
};

exports.getAllSchools = async () => {
  const [rows] = await db.query('SELECT * FROM schools');
  return rows;
};
