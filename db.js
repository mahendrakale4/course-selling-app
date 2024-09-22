const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId

const userSchema = new Schema({
    email: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String
});

const adminSchema = new Schema({
    email: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String,
});

const courseSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: ObjectId
});

const purchaseSchema = new Schema({
    userId: ObjectId,
    courseId: ObjectId
});

const userModule = mongoose.model("user", userSchema);
const adminModule = mongoose.model("admin", adminSchema);
const courseModule = mongoose.model("course", courseSchema);
const purchaseModule = mongoose.model("purchase", purchaseSchema);

module.exports = {
    userModule,
    adminModule,
    courseModule,
    purchaseModule
}