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
