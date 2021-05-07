
const currentUser = require('../models/current_user.json')

console.log("getCurrentUser")


//get CurrentUser  details
module.exports.getCurrentUser = (req, res, next) => {

    try {
        res.status(200).json(currentUser)

    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong ")
    }

}

//get list of users whose skills match with current user
module.exports.getMatching = (req, res, next) => {

    try {


    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong ")
    }

}
//add need
module.exports.addNeed = (req, res, next) => {

    try {


    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong ")
    }

}
//edit need
module.exports.editNeed = (req, res, next) => {

    try {


    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong ")
    }

}
//remove need
module.exports.removeNeed = (req, res, next) => {

    try {


    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong ")
    }

}


//add skill
module.exports.addSkill = (req, res, next) => {

    try {


    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong ")
    }

}
//edit skill
module.exports.editSkill = (req, res, next) => {

    try {


    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong ")
    }

}
//remove skill
module.exports.removeSkill = (req, res, next) => {

    try {


    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong ")
    }

}



//S'inscrire
module.exports.signUp = (req, res, next) => {
    try {


    } catch (err) {
        console.log(err.message);
        res.status(500).send("Something went wrong ")
    }

}
// se logger
module.exports.login = (req, res, next) => {
    try {


    } catch (err) {
        console.log(err.message);
        res.status(500).send("Something went wrong ")
    }

}