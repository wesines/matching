
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

//add need  to currentUser data
module.exports.addNeed = (req, res, next) => {
    try {

        currentUser.needs.push(req.body)
        res.status(200).json(currentUser.needs)

    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong ")
    }

}
//edit need of  currentUser data
module.exports.editNeed = (req, res, next) => {

    try {
        const id = parseInt(req.params.id)
        let need = currentUser.needs.find(need => need.id === id)
        need.content = req.body.content,
            res.status(200).json(need)

    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong ")
    }

}
//remove need from currentUser data
module.exports.removeNeed = (req, res, next) => {

    try {
        const id = parseInt(req.params.id)
        let need = currentUser.needs.find(need => need.id === id)
        currentUser.needs.splice(currentUser.needs.indexOf(need), 1)
        res.status(200).json(currentUser.needs)

    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong ")
    }

}

//add skill to currentUser data
module.exports.addSkill = (req, res, next) => {
    try {
        currentUser.skills.push(req.body)
        res.status(200).json(currentUser.skills)

    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong ")
    }

}
//edit skill of currentUser data
module.exports.editSkill = (req, res, next) => {

    try {
        const id = parseInt(req.params.id)
        let skill = currentUser.skills.find(skill => skill.id === id)
        skill.content = req.body.content,
            res.status(200).json(skill)

    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong ")
    }

}
//remove skill from currentUser data
module.exports.removeSkill = (req, res, next) => {

    try {
        const id = parseInt(req.params.id)
        let skill = currentUser.skills.find(skill => skill.id === id)
        currentUser.skills.splice(currentUser.skills.indexOf(skill), 1)
        res.status(200).json(currentUser.skills)

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