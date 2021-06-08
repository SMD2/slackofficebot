const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

/**
 * @param {string} dayOfWeekName - The date
 * @param {Date} [refDate] - Date to evaluate from (default=today)
 */
exports.dayOfWeekToDate = (dayOfWeekName, refDate)=>{
    var dayOfWeek = dayNames.indexOf(dayOfWeekName)
    if (dayOfWeek==-1){
        var date=new Date(dayOfWeekName)
        if (date && date.getDate()>0){
            return date
        }else{
            return
        }
    }    var today = new Date((refDate || new Date()).setHours(0, 0, 0, 0))
    var todayDayOfWeek = today.getUTCDay();
    var delta

    if (todayDayOfWeek<dayOfWeek){
        delta = dayOfWeek-todayDayOfWeek
    }else{
        delta = (dayOfWeek+7)-todayDayOfWeek
    }

    return today.setDate(today.getDate()+delta)
}



