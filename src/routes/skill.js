// src/routes/skill.js

const express = require('express');
const router = express.Router();
const skillController = require('../controllers/skillController');

// Define the API routes
router.get('/get-all-skills', skillController.getSkills);
router.post('/save-skill', skillController.createSkill);
router.get('/get-skill/:id', skillController.getSkillById);
router.put('/update-skill/:id', skillController.updateSkill);
router.delete('/delete-skill/:id', skillController.deleteSkill);

module.exports = router;
