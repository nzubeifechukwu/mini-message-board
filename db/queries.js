const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
//   console.log(rows);
  return rows;
}

async function addNewMessagePost(username, message) {
  await pool.query("INSERT into messages (username, message) VALUES ($1, $2)", [
    username,
    message,
  ]);
}

async function viewMessageDetails(username) {
  const { rows } = await pool.query(
    "SELECT * FROM messages WHERE username=$1",
    [username]
  );
//   console.log(rows);
  return rows;
}

module.exports = { getAllMessages, addNewMessagePost, viewMessageDetails };
