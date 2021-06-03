const express = require('express')
const router = require('./router')
const app = express()
const port = 8080

app.use(express.urlencoded());

/*app.post('/rest', (req, res) => {
    console.debug(req.body);
  res.send('Ok')
  postMessage({text: "recived data:"+req.body.text+ 
                "\nusername:"+req.body.user_name+
                "\ncommand:"+req.body.command})
})*/

app.use('/rest', router)

app.listen(port, () => {
  console.log(`Officebot server http://localhost:${port}`)
})
