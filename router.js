const express = require('express')
const router = express.Router()

const directives = [
    {
        name: "attending on",
        function: addPersonToOfficeDayHandler
    },
    {
        name: "cancle",
        function: deletePersonToOfficeDayHandler
    },
    {
        name: "who's attending on",
        function: getPersonToOfficeDayHandler
    }
]

router.use(function timeLog (req, res, next) {
    console.debug(new Date().toUTCString(),req.method,req.originalUrl, req.body.text, req.body.user_name)
    next()
})

router.post('/', function (req, res) {
    let directiveName = req.body.text.toLowerCase()
    
    directives.forEach(directive=>{
        console.log (directive.name, directiveName)
        if (directiveName.search(directive.name)>=0){
            directive.function(req,res)
        }
    })
})

function addPersonToOfficeDayHandler(req,res){
    
}

function deletePersonToOfficeDayHandler(req,res){
    
}

function getPersonToOfficeDayHandler(req,res){
    
}


module.exports = router