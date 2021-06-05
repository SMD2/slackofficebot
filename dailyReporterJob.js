const officeDayService = require ('./officedayService')
const slackService = require ('./slackService')

exports.dailyReporterJob=() => {
    let officeDay = officeDayService.getOfficeDay(new Date())
    if (officeDay){
        slackService.postMessage(`Goog morning!\nSee who's coming to the office today:\n${officeDay.getPrintablePersons(true)}`)
    }
    console.debug('Daily report job: '+officeDay.getPrintablePersons())
}