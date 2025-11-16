const db = require("../db/queries");
const CustomNotFoundError = require("../errors/CustomNotFoundError");
const { links, title } = require("../data/data");
const { validateUser } = require("../inputValidators/inputValidators");
const { validationResult, matchedData } = require("express-validator");

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

const addNewMessagePost = [
  validateUser,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("form", {
        title: title,
        errors: errors.array(),
      });
    }
    const { name, message } = matchedData(req);
    await db.addNewMessage(name, message);
    res.redirect("/");
  },
];

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
