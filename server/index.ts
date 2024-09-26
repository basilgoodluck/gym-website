import express, { json } from "express";
import { connect } from "mongoose";
import cors from "cors";
import { config } from "dotenv";
import Stripe from "stripe";

config();

const app = express();

app.use(json());
app.use(cors({ origin: 'http://localhost:5173' }));
const stripeSK = process.env.STRIPE_SK as string;
if(!stripeSK){
    throw new Error("Missing stripe key");
}
const stripe = new Stripe(stripeSK);


const PORT = process.env.PORT || 3000;

const mongourl = process.env.MONGODB_URL as string;
if(!mongourl){
    throw new Error("Mongo url is not defined!");
}

connect(mongourl)
    .then(() => console.log("Mongodb is connected"))
    .catch((err) => console.log(err.message))

app.get("/add", (req, res) => {
    console.log(req);
});

app.post("/payment", async (req, res) => {
    try{
        const { amount, currency } = req.body;

        const paymentIntent = await stripe.paymentIntents.create({
            amount, 
            currency,
        })

        res.json({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error) {
        res.status(400).json({ error: (error as Error).message })
    }
})

app.listen(PORT, () => {
    console.log("Server is running");
});