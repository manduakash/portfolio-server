// src/models/projectModel.js

const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({

  src: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  projectLink: {
    type: String,
  },
  technologies: {
    type: String,
    required: true,
  },
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
