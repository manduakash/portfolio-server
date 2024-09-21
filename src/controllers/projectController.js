// src/controllers/projectController.js

const Project = require("../models/projectModel");

// get(all) api : starts
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json({ status: 1, message: 'Data fetched successfully', data: projects });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ status: 0, message: 'Internal server error', data: null });
  }
};
// get(all) api : ends

// get(single) api : starts
exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    res.json({ status: 1, message: 'Data fetched successfully', data: project });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ status: 0, message: 'Internal server error', data: null });
  }
};
// get(single) api : ends

// save api : starts
exports.createProject = async (req, res) => {
  const project = new Project({
    src: req.body.src,
    title: req.body.title,
    subtitle: req.body.subtitle,
    description: req.body.description,
    projectLink: req.body.projectLink,
    technologies: req.body.technologies,
  });

  try {
    const newProject = await project.save();
    res.status(201).json({ status: 1, message: 'Data added successfully' });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ status: 0, message: 'Internal server error', data: null });
  }
};
// save api : ends

// update api : starts
exports.updateProject = async (req, res) => {
  try {
    const fetch = await Project.findById(req.params.id);

    if (fetch) {
      await Project.updateOne({ _id: req.params.id }, { $set: req.body });
      res.status(201).json({ status: 1, message: "Updated successfully" });
    } else {
      res.status(404).json({ status: 0, message: "Not found" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ status: 0, message: 'Internal server error' });
  }
};
// update api : ends

// delete api : starts
exports.deleteProject = async (req, res) => {
  try {
    const fetch = await Project.findById(req.params.id);
    if (fetch) {
      await Project.deleteOne({ _id: req.params.id });
      res.status(201).json({ status: 1, message: "Deleted successfully" });
    } else {
      res.status(404).json({ status: 0 ,message: "Not found" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ status: 0, message: 'Internal server error' });
  }
};
// delete api : ends
