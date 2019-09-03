const { createSitemap } = require('sitemap')
const fs = require('fs-extra')
const { Pool } = require('pg')
require('dotenv').config()

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
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
        img: `https://cdn.childben.com/${url}/${url}.jpg`
      }

      item = {
        ...item,
        lastmod: modified_time || date
      }

      idMap.push(item)
    }

    const sitemap = createSitemap({
      hostname: 'https://www.childben.com',
      urls: [{ url: '/' }, { url: '/finance/' }, ...idMap]
    })

    console.log(sitemap.toXML())
    fs.outputFileSync('../build/sitemap.xml', sitemap.toXML(), function(err) {
      if (err) {
        console.log(err)
      }
    })
    process.exit()
  } catch (e) {
    console.log(e)
  }
}

generateSitemap()
