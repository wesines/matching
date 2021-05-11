
const needs = require('../models/users_data.json')




//get CurrentUser  details
module.exports.getData = (req, res, next) => {

    try {
        res.send(needs)
    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong ")
    }

}


