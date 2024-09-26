import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Stripe from "stripe";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;
const MONGODB_URL = process.env.MONGODB_URL;
const STRIPE_SK = process.env.STRIPE_SK;

if (!MONGODB_URL) {
  throw new Error("MONGODB_URL is not defined in the environment variables");
}

if (!STRIPE_SK) {
  throw new Error("STRIPE_SK is not defined in the environment variables");
}

const stripe = new Stripe(STRIPE_SK, { apiVersion: '2023-10-16' });

mongoose.connect(MONGODB_URL)
  .then(() => console.log("MongoDB is connected"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

app.post("/create-payment-intent", async (req, res) => {
  try {
    const { amount, currency } = req.body;

    if (!amount || !currency) {
      return res.status(400).json({ error: "Amount and currency are required" });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount, 
      currency,
    });

    res.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    res.status(400).json({ error: (error as Error).message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});