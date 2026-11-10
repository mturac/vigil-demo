const { Pool } = require('pg');

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

async function getUser(id) {
  const res = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
  return res.rows[0] || null;
}

async function updateUser(id, fields) {
  const keys = Object.keys(fields);
  const values = Object.values(fields);
  const sets = keys.map((k, i) => `${k} = $${i + 1}`).join(', ');
  const res = await pool.query(
    `UPDATE users SET ${sets} WHERE id = $${keys.length + 1}`,
    [...values, id]
  );
  return res.rowCount > 0;
}

module.exports = { getUser, updateUser };
