// src/routes/project.js

const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

// Define the API routes
router.get('/get-all-projects', projectController.getProjects);
router.post('/save-project', projectController.createProject);
router.get('/get-project/:id', projectController.getProjectById);
router.put('/update-project/:id', projectController.updateProject);
router.delete('/delete-project/:id', projectController.deleteProject);

module.exports = router;
