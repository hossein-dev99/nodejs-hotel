const cors = require("cors");
const express = require("express");
const path = require("path");

exports.assemble = (app) => {
    app.use(cors());
    app.use(express.static('public'));
}
