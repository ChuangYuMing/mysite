const fs = require('fs').promises
const path = require('path')
const compress = require('brotli/compress')
const { createGzip } = require('zlib')
const { pipeline } = require('stream')
const { createReadStream, createWriteStream } = require('fs')

const COLOR = {
  info: '\x1b[36m',
  done: '\x1b[32m',
  error: '\x1b[31m'
}

async function getFileList(dirPath) {
  const dir = await fs.opendir(dirPath)
  const list = []
  for await (const dirent of dir) {
    list.push(dirent.name)
  }

  return list
}

async function main(dirPath) {
  const fileList = await getFileList(dirPath)

  fileList.forEach(async (item) => {
    const filePath = path.join(dirPath, `/${item}`)
    const stat = await fs.lstat(filePath)

    if (stat.isDirectory()) {
      main(filePath)
    } else {
      // br
      const file = await fs.readFile(filePath)
      const res = compress(file)
      await fs.writeFile(`${filePath}.br`, res)

      // gzip
      const gzip = createGzip()
      const source = createReadStream(filePath)
      const destination = createWriteStream(`${filePath}.gz`)

      pipeline(source, gzip, destination, (err) => {
        if (err) {
          console.error('error:', err)
          process.exitCode = 1
        }
      })
    }
  })
}

console.log(COLOR.done, 'compress...')
const dirPath = path.join(__dirname, '../client/build')
main(dirPath)
