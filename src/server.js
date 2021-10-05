require("dotenv").config();

const app = require("./app");
const port = process.env.APP_PORT;

app.run(port);