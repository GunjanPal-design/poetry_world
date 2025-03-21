const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const newRoutes = require('./Routes/newRoute')
const app = express();
app.use(express.json());
app.use(cors(''));

mongoose.connect("mongodb://localhost:27017/test")
    .then(() => {
        console.log("request send")
    })
    .catch((err) => {
        console.log("error occured", err)
    })

app.use('/user', newRoutes)

app.listen(3000, () => {
    console.log("Server is running on port")
})