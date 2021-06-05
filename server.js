const express = require('express')
const cron = require('node-cron');
const router = require('./router')
const app = express()
const port = 8080

app.use(express.urlencoded());

app.use('/', router)

app.listen(port, () => {
  console.log(`Officebot server http://localhost:${port}`)
})

cron.schedule('0 8 * * *', () => {
  console.log('running a task every minute');
});