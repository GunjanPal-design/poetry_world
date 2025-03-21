const mongoose = require("mongoose")
const newSchema = new mongoose.Schema({

    Username: String,
    Email: String,
    Password: String
})
const newModel = mongoose.model("user", newSchema)
module.exports = newModel