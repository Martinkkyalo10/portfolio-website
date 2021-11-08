const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const projectSchema = new Schema({
  projectId: { type: mongoose.Schema.Types.ObjectId },
  category: String,
  required: true,
  client: String,
  required: true,
  date: String,
  required: true,
  url: String,
  required: true,
  tittle: String,
  required: true,
  description: String,
  required: true,
  files: [
    {
      type: String,
      required: true,
    },
  ],
});
const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
