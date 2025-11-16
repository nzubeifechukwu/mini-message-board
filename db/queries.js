const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function addNewMessage(username, message) {
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
  return rows;
}

async function deleteAllMessages() {
  await pool.query("TRUNCATE TABLE messages");
}

module.exports = {
  getAllMessages,
  addNewMessage,
  viewMessageDetails,
  deleteAllMessages,
};
