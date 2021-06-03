
const https = require('https')
const options = {
  hostname: 'hooks.slack.com',
  port: 443,
  path: process.env.SLACK_URI_PATH,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
}

module.exports = function postMessage (body){
    const req = https.request(options, res => {
        console.debug(`postMessage recived statusCode: ${res.statusCode}`)
      
        res.on('data', d => {
          process.stdout.write(d)
        })
      })
      
      req.on('error', error => {
        console.error(error)
      })
      
      req.write(JSON.stringify(body))
      req.end()
}