class OfficeDay{
    /**
     * @param {Date} date - The date
     * @param {string[]} persons - The string
     */
    constructor(date,persons){
        this.date=date.setHours(0, 0, 0, 0)
        this.persons = persons
    }

    asKey(){
        return `${this.date.getUTCDay}-${this.date.getUTCMonth}`
    }

    addPerson(person){
        this.persons.push(person);
    }
}

module.exports = OfficeDay;