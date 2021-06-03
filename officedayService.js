const NodeCache = require( "node-cache" );
const OfficeDay = require("./OfficeDay");
const cache = new NodeCache();

/**
 * @param {OfficeDay} officeDay - The object
 */
exports.addPerson=(officeDay)=>{
    if (officeDay.date < new Date().setHours(0, 0, 0, 0)){
        console.error("date is in the past")
        return 
    }
    let cachedOfficeDay=cache.get(officeDay.asKey());
    if (cachedOfficeDay!=undefined){
        if (officeDay.persons.length!=1){
            console.error("invalid number of persons to update")
            return
        }
        cachedOfficeDay.addPerson(officeDay.persons[0]) 
        cache.set(cachedOfficeDay.asKey(), cachedOfficeDay)
    }else{
        cache.set(officeDay.asKey(), officeDay)
    }

    return true;
}

/**
 * @param {OfficeDay} officeDay - The object
 */
exports.getPersons=(officeDay)=>{
    if (officeDay.date < new Date().setHours(0, 0, 0, 0)){
        console.error("date is in the past")
        return 
    }

    return cachedOfficeDay=cache.get(officeDay.asKey());
}

/**
 * @param {OfficeDay} officeDay - The object
 */
 exports.deletePerson=(officeDay)=>{
    if (officeDay.date < new Date().setHours(0, 0, 0, 0)){
        console.error("date is in the past")
        return 
    }
    let cachedOfficeDay=cache.get(officeDay.asKey());
    if (cachedOfficeDay==undefined){
        console.error("object not found in cache")
        return;
    }else{
        if (officeDay.persons.length!=1){
            console.error("invalid number of persons to delete")
            return
        }
        for (let i in cachedOfficeDay.persons){
            if (cachedOfficeDay.persons[i]==officeDay.persons[0]){
                cachedOfficeDay.persons.splice(i,1)
                cache.set(cachedOfficeDay.asKey(), cachedOfficeDay)
                return true;
            }
        }
        
    }
    console.error("peron not found in day")
    return    
}


