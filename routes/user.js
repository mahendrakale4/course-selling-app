const express = require('express');
const userRouter = express.Router();

userRouter.post("/signup", (req, res) => {
    res.json({ message: "User created successfully" });
});

userRouter.post("/signin", (req, res) => {
    res.json({ message: "User signed in" });
});

userRouter.post('/purchases', function (req, res) {
    res.json({ message: "User created successfully" });
})

module.exports = userRouter;
