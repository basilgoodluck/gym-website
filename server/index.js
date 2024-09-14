const express = require("express")
<<<<<<< HEAD
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
=======
const app = express()

app.get('/', (req, res) => {
    res.send("Hello world")
>>>>>>> 8d4ed90e244f797d23bdd6244e46114a4d7a9b2d
})