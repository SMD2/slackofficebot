class OfficeDay{
    constructor(day,month){
        this.day=day
        this.month=month
    }

    toString(){
        return `${this.day.toString()},${this.month.toString}`
    }
}

module.exports = OfficeDay;