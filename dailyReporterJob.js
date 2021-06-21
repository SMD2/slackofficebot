const officeDayService = require ('./officedayService')
const slackService = require ('./slackService')

exports.run=() => {
    let officeDay = officeDayService.getOfficeDay(new sDate().setHours(0, 0, 0, 0))
    console.log(officeDay)
    if (officeDay){
        slackService.postMessage(`Good morning!:unicornrun:\nSee who's coming to the office today:\n${officeDay.getPrintablePersons(true)}`)
    }

}
