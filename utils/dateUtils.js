const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

/**
 * @param {string} dayOfWeekName - The date
 * @param {Date} [refDate] - Date to evaluate from (default=today)
 */
exports.dayOfWeekToDate = (dayOfWeekName, refDate)=>{
    var dayOfWeek = dayNames.indexOf(dayOfWeekName)
    var today = new Date((refDate || new Date()).setHours(0, 0, 0, 0))
    var todayDayOfWeek = today.getUTCDay();
    var delta

    if (todayDayOfWeek<dayOfWeek){
        delta = dayOfWeek-todayDayOfWeek-1
    }else{
        delta = (dayOfWeek+7)-todayDayOfWeek-1
    }

    return today.setDate(today.getDate()+delta)
}


