const express = require("express");
const { error } = require("node:console");
const path = require("node:path");
const { text } = require("node:stream/consumers");

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

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
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
    user: req.body.name,
    text: req.body.message,
    added: new Date(),
  });
  res.redirect("/");
});

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`App listening on port ${PORT}`);
});
