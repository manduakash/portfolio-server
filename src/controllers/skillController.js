// src/controllers/skillController.js

const Skill = require("../models/skillModel");

// get(all) api : starts
exports.getSkills = async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json({ status: 1, message: 'Data fetched successfully', data: skills });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ status: 0, message: 'Internal server error', data: null });
  }
};
// get(all) api : ends

// get(single) api : starts
exports.getSkillById = async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);
    res.json({ status: 1, message: 'Data fetched successfully', data: skill });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ status: 0, message: 'Internal server error', data: null });
  }
};
// get(single) api : ends

// save api : starts
exports.createSkill = async (req, res) => {
  const skill = new Skill({
    skill_name: req.body.skill_name,
    image: req.body.image,
    width: req.body.width,
    height: req.body.height,
    level: req.body.level,
    layer: req.body.layer,
  });

  try {
    const newSkill = await skill.save();
    res.status(201).json({ status: 1, message: 'Data added successfully' });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ status: 0, message: 'Internal server error', data: null });
  }
};
// save api : ends

// update api : starts
exports.updateSkill = async (req, res) => {
  try {
    const fetch = await Skill.findById(req.params.id);

    if (fetch) {
      await Skill.updateOne({ _id: req.params.id }, { $set: req.body });
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
exports.deleteSkill = async (req, res) => {
  try {
    const fetch = await Skill.findById(req.params.id);
    if (fetch) {
      await Skill.deleteOne({ _id: req.params.id });
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
