require('newrelic')
const express = require('express')
const path = require('path');
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000
const { Pool } = require('pg')
require('dotenv').config()
let apiRouter = express.Router();
let router = express.Router();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
})

app.use(express.json())
app.use(cors())


app.use('/api', apiRouter)
app.use('/static', express.static('../build/static'))
app.use('/', router)

router.get('*', (req,res) =>{
  res.sendFile(path.resolve(__dirname, '../build/index.html'));
});

apiRouter.get('/article', async (req, res) => {
  let url = req.query.url

  try {
    const client = await pool.connect()
    const result = await client.query(
      `SELECT * FROM pages WHERE url = '${url}'`
    )
    const results = { results: result ? result.rows[0] : null }
    res.json(results)
    client.release()
  } catch (err) {
    console.error(err)
    res.json({error: true, msg: err})
  }
})

apiRouter.get('/pages/:category', async (req, res) => {
  let category = req.params.category
  let queryStr = ''

  if (category === 'all') {
    queryStr = 'SELECT * FROM pages'
  } else {
    queryStr = `SELECT * FROM pages WHERE category = '${category}'`
  }

  try {
    const client = await pool.connect()
    const result = await client.query(queryStr)
    const results = { results: result ? result.rows : null }
    res.json(results)
    client.release()
  } catch (err) {
    console.error(err)
    res.json({error: true, msg: err})
  }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
