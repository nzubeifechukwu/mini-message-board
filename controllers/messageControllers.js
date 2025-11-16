const db = require("../db/queries");
const CustomNotFoundError = require("../errors/CustomNotFoundError");
const { links, title } = require("../data/data");

async function getMessages(req, res) {
  const messages = await db.getAllMessages();
  res.render("index", {
    links: links,
    title: title,
    messages: messages,
  });
}

function addNewMessageGet(req, res) {
  res.render("form", { title: title });
}

async function addNewMessagePost(req, res) {
  const { name, message } = req.body;
  await db.addNewMessage(name, message);
  res.redirect("/");
}

async function getMessageDetails(req, res) {
  const { user } = req.params;
  const message = await db.viewMessageDetails(user);

  if (!message.length) {
    throw new CustomNotFoundError(`user ${user} not found`);
  }

  res.render("open", {
    links: links,
    title: title,
    message: message[0],
  });
}

async function clearMessages(req, res) {
  await db.deleteAllMessages();
  res.redirect("/");
}

module.exports = {
  getMessages,
  addNewMessageGet,
  addNewMessagePost,
  getMessageDetails,
  clearMessages,
};
