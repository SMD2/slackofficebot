
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
const postMessageRequestModel={
  text: '',
  link_names: 1
}

/**
 * @param {string} message - The date
 */
exports.postMessage=(message) => {
  let postMessageRequest = {...postMessageRequestModel}
  postMessageRequest.text = message
  const req = https.request(options, res => {
        console.debug(`postMessage recived statusCode: ${res.statusCode}`)
      
        res.on('data', d => {
          process.stdout.write(d)
        })
      })
      
      req.on('error', error => {
        console.error(error)
      })
      
      req.write(JSON.stringify(postMessageRequest))
      req.end()
}