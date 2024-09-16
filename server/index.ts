import express, { json } from "express"
import { connect } from "mongoose"
import cors from "cors"
import { config } from "dotenv"

config()

const app = express()

app.use(json())
app.use(cors())

const PORT = process.env.PORT || 3000

const mongourl = process.env.MONGODB_URL as string
if(!mongourl){
    throw new Error("Mongo url is not defined!")
}

connect(mongourl)
    .then(() => console.log("Mongodb is connected"))
    .catch((err) => console.log(err.message))

app.get("/add", (req, res) => {
    console.log(req)
})

app.listen(PORT, () => {
    console.log("Server is running")
})