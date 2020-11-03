const axios = require('axios')
const querystring = require('querystring');
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

function purgeMain() {
  const parameter = {
    files: ['https://www.childben.com/', 'https://www.childben.com']
  }
  return instance.post('/', JSON.stringify(parameter)).then((res) => {
    if (res.data.success) {
      console.log(COLOR.done, 'purgeMain OK');
    } else {
      console.log(COLOR.error, 'purgeMain Error');
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
      console.log(COLOR.done, 'purgeAll OK');
    } else {
      console.log(COLOR.error, 'purgeAll Error');
    }

    return res
  })
}

module.exports.purgeMain = purgeMain
module.exports.purgeAll = purgeAll
