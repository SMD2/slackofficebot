const NodeCache = require( "node-cache" );
const OfficeDay = require("./OfficeDay");
const cache = new NodeCache();


exports.updateDay=(officeDay,username)=>{
    let value = cache.get( officeDay.toString() );
    let obj
    if ( value == undefined ){
        obj = [username]
    }else{
        obj=value
        obj.push(username)  
    }
    success = cache.set( officeDay.toString(), obj, 1 );
    return obj;
}


