const express = require("express");
const path = require("node:path");
const {
  getMessages,
  addNewMessageGet,
  addNewMessagePost,
  getMessageDetails,
} = require("./controllers/messageControllers");

require("dotenv").config();

const app = express();
const PORT = 8080;
const assetsPath = path.join(__dirname, "public");

// Set view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Render CSS file
app.use(express.static(assetsPath));

// for the form template: to make sure you can get form inputs. See app.post("/new")
app.use(express.urlencoded({ extended: true }));

app.get("/", getMessages);

app.get("/new", addNewMessageGet);

app.post("/new", addNewMessagePost);

app.get("/:user/message", getMessageDetails);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`App listening on port ${PORT}`);
});
