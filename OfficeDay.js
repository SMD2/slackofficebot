class OfficeDay{
    /**
     * @param {Date} date - The date
     * @param {string[]} [persons] - The string
     */
    constructor(date,persons){
        this.date=new Date(new Date(date).setHours(0, 0, 0, 0))
        this.persons = persons
    }

    asKey(){
        return this.date.getTime()
    }

    getPrintableDate(){
        return this.date.toDateString()
    }

     /**
     * @param {string} person - The date
     */
    addPerson(person){
        this.persons.push(person)
    }
    /**
     * @param {Boolean} [mention] - The date
     */
    getPrintablePersons(mention){
        let sb=""
        this.persons.forEach((person)=>{
            sb+=(mention?'@':'') + person + '\n'
        })

        return sb
    }
}

module.exports = OfficeDay;