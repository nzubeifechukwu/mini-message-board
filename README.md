# Mini Message Board

Mini message board is an Express (NodeJS) app that lets you add a message to a 'board'. You can also view the details of each message. Message details include the name of the user adding the message, the message itself, and the time it was added.

See the [live demo](https://nzubeifechukwu-mini-message-board.up.railway.app/).

## How to use the app

- Clone the repo
- On your local machine, start up the server by running `node app.js`
- Visit http://localhost:3000/ on your browser
- You can then click on the relevant links to add a **new message**, **open** a message, or return to the home page.

## Routes and methods

The app is comprised of the following routes and HTTP methods:

- **app.get("/")**: This is the root route. To navigate to this route, visit http://localhost:3000/, which takes you to the Home page.
- **app.get("/new")**: This route takes you to the New Message page. To navigate to this route, click on the New Message nav link on Home (or message details) page or visit http://localhost:3000/new.
- **app.post("/new")**: This route sends a POST request when you click on the Submit button after filling out the form on the New Message page. It then redirects you to the Home page.
- **app.get("/:user/message")**: This route shows the message details when you click on the Open link for each message.

## Tools/languages/frameworks

- ExpressJS (NodeJS)
- EJS

## Inspiration

This [Mini Message Board project](https://www.theodinproject.com/lessons/node-path-nodejs-mini-message-board) is part of [The Odin Project](https://www.theodinproject.com/lessons/node-path-nodejs-mini-message-board)'s Full-stack Web Development (JavaScript) path.

## Contact

You can reach me on [X](https://x.com/NzubeIfechukwu) or [LinkedIn](https://www.linkedin.com/in/nzubeifechukwu/).
