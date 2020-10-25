require('newrelic')
const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000
const { Pool } = require('pg')
require('dotenv').config()
let apiRouter = express.Router()
let router = express.Router()

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
})

app.use(express.json())
app.use(cors())
app.use(
  serveStatic(path.resolve(__dirname, '../build'), {
    setHeaders: (res, path) => {
      if (serveStatic.mime.lookup(path) === 'text/html') {
        // Custom Cache-Control for HTML files
        res.setHeader('Cache-Control', 'public, max-age=0')
      } else {
        res.setHeader('Cache-Control', 'public, max-age=31536000')
      }
    }
  })
)
app.use('/api', apiRouter)

// for no static file
app.use('/', router)
router.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../build/index.html'))
})

// api router
apiRouter.get('/article', async (req, res) => {
  let url = req.query.url

  try {
    const client = await pool.connect()
    const result = await client.query(
      `SELECT category, url, title, content, description, keywords, date, modified_time, questions FROM pages WHERE url = '${url}' AND status = 'open'`
    )

    const results = {
      results: result.rows.length !== 0 ? result.rows[0] : { error: 1 }
    }

    res.json(results)
    client.release()
  } catch (err) {
    console.error(err)
    res.json({ error: true, msg: err })
  }
})

apiRouter.get('/pages/:category', async (req, res) => {
  let category = req.params.category
  let queryStr = ''

  if (category === 'all') {
    queryStr = `SELECT category, url, title FROM pages WHERE status = 'open' ORDER BY id DESC`
  } else {
    queryStr = `SELECT category, url, title FROM pages WHERE category = '${category}' AND status = 'open' ORDER BY id DESC`
  }

  try {
    const client = await pool.connect()
    const result = await client.query(queryStr)
    const results = { results: result.rows.length !== 0 ? result.rows : [] }
    res.json(results)
    client.release()
  } catch (err) {
    console.error(err)
    res.json({ error: true, msg: err })
  }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
