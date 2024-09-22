const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
  skill_name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  width: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  layer: {
    type: String,
    required: true,
  },
});

const Skill = mongoose.model("Project", skillSchema);

module.exports = Skill;
