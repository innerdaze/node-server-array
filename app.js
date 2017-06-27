import http from 'http'
import { HOSTS } from './config'

const port = 3000

function callback(req, res) {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World\n')
}

for (let i = 0, ln = HOSTS.length, hostname, server; i < ln; i++) {
  server = http.createServer(callback)
  hostname = HOSTS[i]

   server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
  })
}
