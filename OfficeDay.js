class OfficeDay{
    /**
     * @param {Date} date - The date
     * @param {string[]} persons - The string
     */
    constructor(date,persons){
        this.date=new Date(date.setHours(0, 0, 0, 0))
        this.persons = persons
    }

    asKey(){
        return `${this.date.getUTCDate()}-${this.date.getUTCMonth()}`
    }

    addPerson(person){
        this.persons.push(person);
    }
}

module.exports = OfficeDay;