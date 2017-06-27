const http = require('http')

const hostnames = [
  '127.0.0.1',
  '127.0.0.2',
  '127.0.0.3'
]
const port = 3000

function callback(req, res) {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World\n')
}

for (let i = 0, ln = hostnames.length, hostname, server; i < ln; i++) {
  server = http.createServer(callback)
  hostname = hostnames[i]

   server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
  })
}
