const express = require('express')
const app = express()
const port = 8080
const bodyParser = require('body-parser')

app.use(express.urlencoded());

app.post('/rest', (req, res) => {
    console.debug(req.body);
  res.send('Ok')
  postMessage({text: "recived data:"+req.body.text+ 
                "\nusername:"+req.body.user_name+
                "\ncommand:"+req.body.command})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


const https = require('https')
const options = {
  hostname: 'hooks.slack.com',
  port: 443,
  path: 'reducted',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
}

let postMessage = function (body){
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
