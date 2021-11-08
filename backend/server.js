require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
const mongoose = require("mongoose");

// database connection
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("connection to db established"));

// express middleware to parse requests with JSON payload. body-parser is required
app.use(express.json());
// file upload middleware
app.use("/uploads", express.static("uploads"));

// routes
const usersRouter = require("./routes/users");
app.use("/api/users", usersRouter);

const ordersRouter = require("./routes/orders");
app.use("/api/orders", ordersRouter);
const projectsRouter = require("./routes/projects");
app.use("/api/projects", projectsRouter);

app.listen(5000, () =>
  console.log(`Server started at port ${process.env.PORT}`)
);
