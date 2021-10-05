require("dotenv").config();

const app = require("./app");
const port = process.env.PORT;

app.run(port);