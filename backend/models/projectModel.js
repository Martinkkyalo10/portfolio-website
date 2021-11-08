const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const projectSchema = new Schema({
  category: String,
  category: String,
  client: String,
  date: String,
  description: String,
  url: String,
  tittle: String,
  files: String,
});
const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
