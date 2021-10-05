const express = require("express");
const router = require("./router");
const notFound = require("./middleware/notFound");
const serverError = require("./middleware/serverError");
const middlewares = require("./middleware");
const mongo = require("./db/mongo");
const app = express();

middlewares.assemble(app);
mongo.run();
router.assemble(app);
notFound.assemble(app);
serverError.assemble(app);

exports.run = (port) => {
    app.listen(port ,() => {
        console.log(`application running on port ${port}`)
    })
}
