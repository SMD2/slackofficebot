const express = require('express')
const OfficeDay = require('./OfficeDay')
const dateUtils = require ('./utils/dateUtils')
const officeDayService = require ('./officedayService')
const slackService = require('./slackService')

var router = express.Router()

router.use(function timeLog (req, res, next) {
    console.debug(new Date().toUTCString(),req.method,req.originalUrl, req.body.text, req.body.user_name)
    next()
})

//AWS ELB healthcheck
router.get('/', (req,res)=>{
    res.send('ok')
})

router.post('/attend', function (req, res) {
    let cmd = req.body.text.toLowerCase()//.replaceAll(" ", "")
    let date = new Date(dateUtils.dayOfWeekToDate(cmd))
    if(!date){
        res.status(400).send('Invalid day / date')
        return
    }
    let officeDay = new OfficeDay(date,[req.body.user_name])
    officeDay = officeDayService.addPerson(officeDay)
    if (!officeDay){
        console.error('ERROR: Can`t create oficeDay')
        res.status(500).send('Internal server error')
        return
    }
    let responseTest = `Also attending on ${officeDay.getPrintableDate()}:\n${officeDay.getPrintablePersons()}`
    res.send(responseTest);
    slackService.postMessage(`:awesome: @${req.body.user_name} will attend at the office on ${officeDay.getPrintableDate()}`)
})

router.post('/decline', function (req, res) {
    let cmd = req.body.text.toLowerCase()//.replaceAll(" ", "")
    let date = new Date(dateUtils.dayOfWeekToDate(cmd))
    if(!date){
        res.status(400).send('Invalid day / date')
        return
    }
    let officeDay = new OfficeDay(date,[req.body.user_name])
    officeDay = officeDayService.deletePerson(officeDay)
    if (!officeDay){
        console.error('ERROR: Can`t create oficeDay')
        res.status(500).send('Internal server error')
        return
    }
    let responseTest = `Too bad :smiling_face_with_tear:`
    res.send(responseTest);
})

router.post('/show', function (req, res){
    let cmd = req.body.text.toLowerCase()//.replaceAll(" ", "")
    let date = dateUtils.dayOfWeekToDate(cmd)
    if(!date){
        res.status(400).send('Invalid day / date')
        return
    }
    let officeDay = officeDayService.getOfficeDay(date)
    if (!officeDay){
        res.send (`No one is YET attending the office on ${new Date(date).toDateString()}, you can be the first one!`)
        return
    }
    let responseTest = `Attending on ${officeDay.getPrintableDate()}:\n${officeDay.getPrintablePersons()}`
    res.send(responseTest)
})

module.exports = router