const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

module.exports = { getAllMessages };

// const links = [
//   {
//     href: "/",
//     text: "Home",
//   },
//   {
//     href: "/new",
//     text: "New Message",
//   },
// ];

// let messages = [
//   {
//     text: "Hi, there!",
//     user: "Nzube",
//     added: new Date(),
//   },
//   {
//     text: "Kedu?",
//     user: "Ifechukwu",
//     added: new Date(),
//   },
// ];

// const title = "Mini Message Board";

// module.exports = { links, messages, title };
