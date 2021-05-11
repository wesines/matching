
const needs = require('../models/list_of_needs.json')




//get CurrentUser  details
module.exports.getAllNeeds = (req, res, next) => {

    try {
        res.send(needs)
    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong ")
    }

}
//get CurrentUser  details
module.exports.getAllSkills = (req, res, next) => {

    try {
        res.send(skills)
    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong ")
    }

}


