import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.MONGODB_URL || `mongodb+srv://nobledev:${encodeURIComponent("Y.2yP*KB!BgpPd7")}@free-cluster.xucjn.mongodb.net/?retryWrites=true&w=majority&appName=free-cluster`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export async function connectToDatabase() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    return client;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
}

export async function closeConnection() {
  await client.close();
}