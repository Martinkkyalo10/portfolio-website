const express = require("express");
const router = express.Router();
const Project = require("../models/projectModel");
const upload = require("../upload");

// Get All Route
router.get("/", async (req, res) => {
  try {
    const project = await Project.find();
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get One Route
// middleware is need here to get user id
async function getProject(req, res, next) {
  let project;
  try {
    project = await Project.findById(req.params.id);
    if (project == null) {
      return res
        .status(404)
        .json({ message: "Sorry, the project is not available" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.project = project;
  next();
}

// get one order
router.get("/:id", getProject, (req, res) => {
  res.json(res.project);
});

// Create One Route
router.post("/", async (req, res) => {
  upload(req, res, function (err) {
    if (req.file) {
      let path = "";
      req.files.forEach(function (files, index, arr) {
        path = path + files.path + ",";
      });
      path = path.substring(0, path.lastIndexOf(","));
      project.file = path;
    }
  });

  const project = new project({
    category: req.body.category,
    client: req.body.client,
    date: req.body.date,
    description: req.body.description,
    url: req.body.url,
    tittle: req.body.tittle,
    files: req.body.files,
  });
  try {
    const newProject = await project.save();
    res.status(201).json({ newProject });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Edit One Route PUT version
router.put("/:id", getProject, async (req, res) => {
  try {
    const updatedProject = await res.project.set(req.body);
    res.json(updatedProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Edit One Route PATCH version
router.patch("/:id", getProject, async (req, res) => {
  if (req.body.category != null) {
    res.project.category = req.body.category;
  }
  if (req.body.client != null) {
    res.project.client = req.body.client;
  }
  if (req.body.date != null) {
    res.project.date = req.body.date;
  }
  if (req.body.description != null) {
    res.project.description = req.body.description;
  }
  if (req.body.url != null) {
    res.project.url = req.body.url;
  }
  if (req.body.tittle != null) {
    res.project.tittle = req.body.tittle;
  }
  if (req.body.files != null) {
    res.project.files = req.body.files;
  }
  try {
    const updatedProject = await res.project.save();
    res.json(updatedProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete One Route
router.delete("/:id", getProject, async (req, res) => {
  try {
    await res.project.deleteOne();
    res.json({ message: "Project has been deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
