const express = require("express");
const path = require("node:path");

require("dotenv").config();

const CustomNotFoundError = require("./errors/CustomNotFoundError");
const { links, title, messages } = require("./data/data");
const {
  getAllMessages,
  addNewMessagePost,
  viewMessageDetails,
} = require("./db/queries");

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

app.get("/", async (req, res) => {
  res.render("index", {
    links: links,
    title: title,
    messages: await getAllMessages(),
  });
});

app.get("/new", (req, res) => {
  res.render("form", { title: title });
});

app.post("/new", async (req, res) => {
  await addNewMessagePost(req.body.name, req.body.message);
  res.redirect("/");
});

app.get("/:user/message", async (req, res) => {
  const message = await viewMessageDetails(req.params.user);
  console.log(message);
  // const { user } = { ...req.params };
  // let messageDetails;

  // messages.forEach((message) => {
  //   if (user === message.user) {
  //     messageDetails = message;
  //   }
  // });
  // if (!messageDetails) throw new CustomNotFoundError(`user ${user} not found`);
  res.render("open", {
    links: links,
    title: title,
    message: message[0],
  });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`App listening on port ${PORT}`);
});
