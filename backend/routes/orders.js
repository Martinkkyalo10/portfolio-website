const express = require("express");
const router = express.Router();
const Order = require("../models/orderModel");

// Get All Route
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get One Route
// middleware is need here to get user id
async function getOrder(req, res, next) {
  let order;
  try {
    order = await Order.findById(req.params.id);
    if (order == null) {
      return res
        .status(404)
        .json({ message: "Sorry, the order is not available" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.order = order;
  next();
}

// get one order
router.get("/:id", getOrder, (req, res) => {
  res.json(res.order);
});

// Create One Route
router.post("/", async (req, res) => {
  const order = new Order({
    name: req.body.name,
    email: req.body.email,
    project: req.body.project,
    description: req.body.description,
    budget: req.body.budget,
    timeline: req.body.timeline,
  });
  try {
    const newOrder = await order.save();
    res.status(201).json({ newOrder });
    res.send({ message: "Order created successifully", order: newOrder });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Edit One Route PUT version
router.put("/:id", getOrder, async (req, res) => {
  try {
    const updatedOrder = await res.order.set(req.body);
    res.json(updatedOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Edit One Route PATCH version
router.patch("/:id", getOrder, async (req, res) => {
  if (req.body.name != null) {
    res.order.name = req.body.name;
  }
  if (req.body.email != null) {
    res.order.email = req.body.email;
  }
  if (req.body.project != null) {
    res.order.project = req.body.project;
  }
  if (req.body.description != null) {
    res.order.description = req.body.description;
  }
  if (req.body.budget != null) {
    res.order.budget = req.body.budget;
  }
  if (req.body.timeline != null) {
    res.order.timeline = req.body.timeline;
  }
  try {
    const updatedOrder = await res.order.save();
    res.json(updatedOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete One Route
router.delete("/:id", getOrder, async (req, res) => {
  try {
    await res.order.deleteOne();
    res.json({ message: "Order has been deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
