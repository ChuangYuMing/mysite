const { SitemapStream, streamToPromise } = require('sitemap')
const { Readable } = require('stream')
const fs = require('fs-extra')
const { Pool } = require('pg')
require('dotenv').config()

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
})

async function generateSitemap() {
  try {
    const queryStr = `SELECT category, url, date, modified_time FROM pages WHERE status = 'open' ORDER BY id DESC `
    const client = await pool.connect()
    const result = await client.query(queryStr)
    let idMap = []

    for (var i = 0; i < result.rows.length; i++) {
      let { url, category, date, modified_time } = result.rows[i]
      let item = {
        url: `/${category}/${url}`,
        img: [{ url: `https://cdn.childben.com/${url}/${url}.jpg` }]
      }

      item = {
        ...item,
        lastmod: modified_time || date
      }

      idMap.push(item)
    }

    idMap = [{ url: '/' }, { url: '/finance/' }, ...idMap]

    const stream = new SitemapStream({ hostname: 'https://www.childben.com' })
    return streamToPromise(Readable.from(idMap).pipe(stream)).then((data) => {
      console.log(data.toString())
      fs.outputFileSync('../build/sitemap.xml', data.toString(), function (
        err
      ) {
        if (err) {
          console.log(err)
        }
      })
      process.exit()
    })
  } catch (e) {
    console.log(e)
  }
}

generateSitemap()
