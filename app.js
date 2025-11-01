const express = require("express");
const { error } = require("node:console");
const path = require("node:path");
const { text } = require("node:stream/consumers");

const app = express();

const PORT = 3000;

const messages = [
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

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`App listening on port ${PORT}`);
});

// messages.map((message) => {
//   console.log(message.user);
//   console.log(message.text);
//   console.log(message.added);
// });
