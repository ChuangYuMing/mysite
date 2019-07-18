const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const { Pool } = require('pg')
require('dotenv').config()

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
})

app.use(
  '/',
  express.static('../build', {
    index: 'index.html'
  })
)

app.get('/db', async (req, res) => {
  try {
    const client = await pool.connect()
    const result = await client.query('SELECT * FROM test_table')
    const results = { results: result ? result.rows : null }
    res.json(results)
    client.release()
  } catch (err) {
    console.error(err)
    res.send('Error ' + err)
  }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
