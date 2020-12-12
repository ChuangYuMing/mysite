const axios = require('axios')
const querystring = require('querystring')
require('dotenv').config({ path: '.client_secret' })
const { CLOUDFLARE_TOKEN } = process.env
const COLOR = {
  info: '\x1b[36m',
  done: '\x1b[32m',
  error: '\x1b[31m'
}

const instance = axios.create({
  baseURL:
    'https://api.cloudflare.com/client/v4/zones/ecfcf174ac255c70984bb2ab9988bf34/purge_cache',
  timeout: 1000,
  headers: {
    'X-Auth-Email': 'childben28@gmail.com',
    'X-Auth-Key': `${CLOUDFLARE_TOKEN}`,
    'Content-Type': 'application/json'
  }
})

function purgeUrl() {
  const url = process.argv[1]
  let parameter = {
    files: ['https://www.childben.com/', 'https://www.childben.com']
  }

  if (url) {
    parameter = {
      files: [url]
    }
  }

  return instance.post('/', JSON.stringify(parameter)).then((res) => {
    if (res.data.success) {
      console.log(COLOR.done, 'purgeUrl OK')
    } else {
      console.log(COLOR.error, 'purgeUrl Error')
    }

    return res
  })
}

function purgeCategory() {
  let parameter = {
    files: [
      'https://www.childben.com/',
      'https://www.childben.com',
      'https://www.childben.com/finance/',
      'https://www.childben.com/economics/',
      'https://www.childben.com/investing/',
      'https://www.childben.com/career/',
      'https://www.childben.com/trading/',
      'https://www.childben.com/politics/',
      'https://www.childben.com/history/',
      'https://www.childben.com/api/pages/all',
      'https://www.childben.com/api/pages/finance',
      'https://www.childben.com/api/pages/economics',
      'https://www.childben.com/api/pages/investing',
      'https://www.childben.com/api/pages/career',
      'https://www.childben.com/api/pages/trading',
      'https://www.childben.com/api/pages/politics',
      'https://www.childben.com/api/pages/history'
    ]
  }

  return instance.post('/', JSON.stringify(parameter)).then((res) => {
    if (res.data.success) {
      console.log(COLOR.done, 'purgeUrl OK')
    } else {
      console.log(COLOR.error, 'purgeUrl Error')
    }

    return res
  })
}

function purgeAll() {
  const parameter = {
    purge_everything: true
  }
  return instance.post('/', JSON.stringify(parameter)).then((res) => {
    if (res.data.success) {
      console.log(COLOR.done, 'purgeAll OK')
    } else {
      console.log(COLOR.error, 'purgeAll Error')
    }

    return res
  })
}

module.exports.purgeUrl = purgeUrl
module.exports.purgeAll = purgeAll
module.exports.purgeCategory = purgeCategory
