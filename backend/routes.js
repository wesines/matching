const express = require('express');
const router = express.Router();
const CtrlApi = require('./Controllers/CtrlApiCurrentUser');
const Needs = require('./Controllers/CtrlApiNeeds');
const Data = require('./Controllers/CtrlApiAllUsers');

//get All needs 
router.get('/getAllNeeds', Needs.getAllNeeds);
router.get('/getAllSkills', Needs.getAllSkills);

//get All data
router.get('/getData', Data.getData);


//Inscription && connexion
router.post('/signUp', CtrlApi.signUp);
router.post('/login', CtrlApi.login);

router.get('/getCurrentUser', CtrlApi.getCurrentUser);
router.get('/getMatching', CtrlApi.getMatching);
router.get('/getNeedByID/:id', CtrlApi.getNeedByID);
router.get('/getSkillByID/:id', CtrlApi.getSkillByID);

//needs
router.post('/addNeed', CtrlApi.addNeed);
router.put('/editNeed/:id', CtrlApi.editNeed);
router.delete('/removeNeed/:id', CtrlApi.removeNeed);

//skills
router.post('/addskill', CtrlApi.addSkill);
router.put('/editSkill/:id', CtrlApi.editSkill);
router.delete('/removeSkill/:id', CtrlApi.removeSkill);

module.exports = router;