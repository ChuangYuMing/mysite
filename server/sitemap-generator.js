require('@babel/register')({
  ignore: [/node_modules/],
  presets: ['@babel/preset-env', '@babel/preset-react']
})

const router = require('../sitemap-routes').default
const Sitemap = require('react-router-sitemap').default
const { Pool } = require('pg')
require('dotenv').config()

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
})

async function generateSitemap() {
  try {
    const queryStr = 'SELECT category, url FROM pages ORDER BY id DESC '
    const client = await pool.connect()
    const result = await client.query(queryStr)
    let idMap = []

    for (var i = 0; i < result.rows.length; i++) {
      idMap.push({
        category: result.rows[i].category,
        url: result.rows[i].url
      })
    }

    const paramsConfig = {
      '/:category': [
        {
          category: 'finance'
        },
        {
          category: 'technology'
        },
        {
          category: 'politics'
        }
      ],
      '/:category/:url': idMap
    }

    client.release()
    return new Sitemap(router)
      .applyParams(paramsConfig)
      .build('https://www.childben.com/')
      .save('../build/sitemap.xml')
  } catch (e) {
    console.log(e)
  }
}

generateSitemap()
