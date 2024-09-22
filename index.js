const express = require('express');
const mongoose = require("mongoose");
require('dotenv').config()

const app = express();

app.use(express.json());

const userRouter = require('./routes/user');
const courseRouter = require('./routes/course');
const adminRouter = require('./routes/admin');
const { connect } = require('mongoose');

app.use("/user", userRouter);
app.use("/course", courseRouter);
app.use("/admin", adminRouter)


async function main() {
    try {
        await mongoose.connect(process.env.DB_URI);
        app.listen(3000);
        console.log('Server is running on http://localhost:3000');
    } catch (error) { console.error('Error connecting to MongoDB:', error); }
}

main()


