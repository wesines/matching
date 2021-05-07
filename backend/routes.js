const express = require('express');
const router = express.Router();
const CtrlApi = require('./Controllers/CtrlApi');


//Inscription && connexion
router.post('/signUp', CtrlApi.signUp);
router.post('/login', CtrlApi.login);

router.get('/getCurrentUser', CtrlApi.getCurrentUser);
router.get('/getMatching', CtrlApi.getMatching);

//needs
router.post('/addNeed', CtrlApi.addNeed);
router.put('/editneed', CtrlApi.editNeed);
router.delete('/removeNeed', CtrlApi.removeNeed);

//skills
router.post('/addskill', CtrlApi.addSkill);
router.put('/editSkill', CtrlApi.editSkill);
router.delete('/removeSkill', CtrlApi.removeSkill);

module.exports = router;