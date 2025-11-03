const express = require("express");
const path = require("node:path");
const CustomNotFoundError = require("./errors/CustomNotFoundError");
// const cheerio = require("cheerio");
// const ejs = require("ejs");

const app = express();

const PORT = 3000;

const links = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "new",
    text: "New Message",
  },
];

let messages = [
  {
    text: "Hi, there!",
    user: "Nzube",
    added: new Date(),
  },
  {
    text: "Kedu?",
    user: "Ifechukwu",
    added: new Date(),
  },
];

const title = "Mini Message Board";

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// for the form template: to make sure you can get form inputs. See app.post("/new")
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  res.render("index", {
    links: links,
    title: title,
    messages: messages,
  });
});

app.get("/new", (req, res) => {
  res.render("form", { links: links, title: title });
});

app.post("/new", (req, res) => {
  messages.push({
    id: messages.length - 1,
    user: req.body.name,
    text: req.body.message,
    added: new Date(),
  });
  res.redirect("/");
});

app.get("/:user/message", (req, res) => {
  const { user } = { ...req.params };
  let messageDetails;

  messages.forEach((message) => {
    if (user === message.user) {
      messageDetails = message;
    }
  });
  if (!messageDetails) throw new CustomNotFoundError(`user ${user} not found`);
  res.render("open", { links: links, title: title, message: messageDetails });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`App listening on port ${PORT}`);
});
