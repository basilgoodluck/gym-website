const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("Mongodb is connected"))
    .catch((err) => console.log(err))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("Server is running")
})