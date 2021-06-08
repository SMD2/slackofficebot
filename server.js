const express = require('express')
const cron = require('node-cron');
const router = require('./router')
const dailyReporterJob = require ('./dailyReporterJob')
const app = express()
const port = 8080

app.use(express.urlencoded());

app.use('/', router)

app.listen(port, () => {
  console.log(`Officebot server http://localhost:${port}`)
})

cron.schedule('0 5 * * *', () => {
  console.log('Daily job')
  dailyReporterJob.run()
});