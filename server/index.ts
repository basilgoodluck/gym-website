import express, { json } from "express";
import { connectToDatabase, fetchReviews } from "./mongodb";
import cors from "cors";
import { config } from "dotenv";
import Stripe from "stripe";

config();

const app = express();
app.use(json());

const allowedOrigins = ['http://localhost:5173', 'https://gym-website-seven-pink.vercel.app'];
app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, origin);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
}));

const stripeSK = process.env.STRIPE_SK;
if (!stripeSK) {
    throw new Error("Missing stripe key");
}
const stripe = new Stripe(stripeSK);

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {
        await connectToDatabase();
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT} and MongoDB is connected...`);
        });
    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
};

app.get("api/reviews", async (req, res) => {
    try {
        const reviews = await fetchReviews()
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ error: "Error fetching reviews" });
    }
})

app.post("/api/payment", async (req, res) => {
    try {
        const { amount, currency } = req.body;

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency,
        });

        res.json({
            clientSecret: paymentIntent.client_secret
        });
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
});

startServer();
