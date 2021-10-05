const express = require("express");

exports.assemble = (app) => {
    app.use(express.static('public'));
}
