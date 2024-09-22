const express = require('express');
const courseRouter = express.Router();

courseRouter.post("/purchases", function (req, res) {
    res.json({
        message: "User created successfully"
    })
})

courseRouter.get("/preview", function (req, res) {
    res.json({
        message: "User created successfully"
    })
})

module.exports = courseRouter;
