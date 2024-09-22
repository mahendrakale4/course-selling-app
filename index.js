const express = require('express');
const app = express();

app.use(express.json());

const userRouter = require('./routes/user'); // Ensure the path is correct
const courseRouter = require('./routes/course'); // Ensure the path is correct

app.use("/user", userRouter);
app.use("/course", courseRouter);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});


