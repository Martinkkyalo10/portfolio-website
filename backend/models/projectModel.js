const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const projectSchema = new Schema({
  category: String,
  title: String,
  client: String,
  stack: [],
  description: String,
  siteUrl: String,
  codeUrl: String,
  imageName: String,
});
const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
