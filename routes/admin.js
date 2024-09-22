const express = require('express');
const adminRouter = express.Router();
const adminModule = require('../db');

adminRouter.post("/signup", (req, res) => {
    res.json({ message: "User created successfully" });
});

adminRouter.post("/signin", (req, res) => {
    res.json({ message: "User signed in" });
});

adminRouter.post("/course", (req, res) => {
    res.json({ message: "course added" });
});

adminRouter.put("/course", (req, res) => {
    res.json({ message: "course updated" });
});

adminRouter.get("/course", (req, res) => {
    res.json({ message: "All course" });
});

module.exports = adminRouter;