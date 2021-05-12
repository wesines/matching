
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const currentUser = require('../models/current_user.json')
const data = require('../models/users_data.json')
const Needs = require('../models/list_of_needs.json');


//get CurrentUser  details
module.exports.getCurrentUser = (req, res, next) => {

    try {

        res.send(currentUser)

    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong ")
    }

}


//get list of users whose skills match with current user
module.exports.getMatching = (req, res, next) => {

    try {
        let tabSkills = [];
        let matchingTab = [];
        let nbrOfskillsmatched = 0
        let currentNeeds = currentUser.needs.map(item => {
            return item.content
        })
        let skillsOfUsers = data.data.map(item => {
            return (item.skills)
        })
        for (let i = 0; i < skillsOfUsers.length; i++) {
            nbrOfskillsmatched = 0;
            tabSkills = []
            if (skillsOfUsers[i] == null) {
                nbrOfskillsmatched = 0;
                tabSkills = []
                matchingTab.push(
                    {
                        "matching": nbrOfskillsmatched,
                        "id": data.data[i].id,
                        "first_name": data.data[i].first_name,
                        "last_name": data.data[i].last_name,
                        "projects": data.data[i].projects,
                        "skills": tabSkills
                    })
            }
            else {
                for (let j = 0; j < skillsOfUsers[i].length; j++) {
                    if (currentNeeds.indexOf(skillsOfUsers[i][j].content) != -1) {
                        tabSkills.push(skillsOfUsers[i][j].content)
                        nbrOfskillsmatched++;
                    }
                }
                matchingTab.push({
                    "matching": nbrOfskillsmatched,
                    "id": data.data[i].id,
                    "first_name": data.data[i].first_name,
                    "last_name": data.data[i].last_name,
                    "projects": data.data[i].projects,
                    "skills": tabSkills
                }
                )
            }
        }
        matchingTab.sort(function (a, b) {
            return b.matching - a.matching
        });

        res.send(matchingTab)
    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong ")
    }

}

//add need  to currentUser data
module.exports.addNeed = (req, res, next) => {
    try {

        for (let i = 0; i < req.body.length; i++) {

            currentUser.needs.push(req.body[i])
        }
        res.send(currentUser.needs)
    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong ")
    }

}
//get need of  currentUser data
module.exports.getNeedByID = (req, res, next) => {

    try {
        const id = parseInt(req.params.id)
        let need = currentUser.needs.find(need => need.id === id)
        res.json(need)

    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong ")
    }

}

//edit need of  currentUser data
module.exports.editNeed = (req, res, next) => {

    try {
        console.log("req.body", req.body)
        const id = parseInt(req.params.id)
        let need = currentUser.needs.find(need => need.id === id)
        need.content = req.body.content
        res.send(need)

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
        for (let i = 0; i < req.body.length; i++) {
            currentUser.skills.push(req.body[i])
        }
        res.send(currentUser.skills)
    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong ")
    }

}
//get need of  currentUser data
module.exports.getSkillByID = (req, res, next) => {

    try {
        const id = parseInt(req.params.id)
        let skill = currentUser.skills.find(skill => skill.id === id)
        res.send(skill)

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
        data.push(req.body)
        res.send(data)
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Something went wrong ")
    }

}
// se logger
module.exports.login = async (req, res, next) => {
    try {


        // Pas d'information à traiter
        if (!req.body.id) {

            return res.status(400).json({ message: 'Error. Please enter the correct username and id' })
        }

        // Checking
        if (currentUser.id == req.body.id) {
            console.log("true")
            res.send("true")
        }
        else {
            console.log("erreur")
            return res.status(400).json({ message: 'Error. Wrong login or password' })
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Something went wrong ")
    }

}