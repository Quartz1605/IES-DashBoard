import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import { Transaction,Budget,Portfolio,Watchlist,MarketData,News} from "./db.js";

const app = express();
const PORT = 3000;

mongoose.connect("mongodb+srv://captainpratham05:SIhVmFrZyTN9w8j2@cluster0.eb9gngb.mongodb.net/IESDashboard").then(() => {console.log("Connection Successfull")}).catch((e) => {console.log("Some error happened " + e)})

// Middlewares
app.use(express.json());
app.use(cors({
  origin : "http://localhost:5173",
  credentials : true
}));

// ---------------- Routes ----------------
app.get('/', (req, res) => {
  res.send('API is up 🚀');
});

app.get('/api/ping', (req, res) => {
  res.json({ message: 'pong' });
});

app.post("/add-data", async (req, res) => {
  try {
    const transaction = await Transaction.create({
      type: "expense",
      category: "Transport",
      amount: 1450,
      notes: "Metro monthly pass"
    });

    const budget = await Budget.create({
      category: "Transport",
      limit: 4500,
      spent: 2000,
      month: "May"
    });

    const portfolio = await Portfolio.create({
      asset: "AAPL",
      quantity: 10,
      avgBuyPrice: 150,
      currentPrice: 165,
      lastUpdated: new Date()
    });

    const watchlist = await Watchlist.create({
      assets: ["TSLA", "BTC-USD", "ETH-USD"]
    });

    const marketData = await MarketData.create({
      symbol: "TSLA",
      type: "stock",
      price: 230,
      changePercent: -1.2,
      volume: 1200000,
      lastUpdated: new Date()
    });

    const news = await News.create({
      title: "Tesla stock dips on earnings miss",
      source: "Bloomberg",
      url: "https://bloomberg.com/tesla-news",
      sentiment: "Bearish",
      publishedAt: new Date("2025-05-20"),
      cachedAt: new Date()
    });

    res.status(201).json({
      message: "All documents created successfully 🚀",
      data: { transaction, budget, portfolio, watchlist, marketData, news }
    });

  } catch (error) {
    console.error("Error creating data:", error);
    res.status(500).json({ error: "Failed to create data", details: error.message });
  }
});


app.get("/data",async (req,res) => {

  try {
    const transaction = await Transaction.find({})

    const budget = await Budget.find({})

    const portfolio = await Portfolio.find({});

    const watchlist = await Watchlist.find({});

    const marketData = await MarketData.find({});

    const news = await News.find({});

    res.status(200).json({
      message: "Data received successfully",
      data: { transaction, budget, portfolio, watchlist, marketData, news }
    });

  } catch (error) {
    console.error("Error creating data:", error);
    res.status(500).json({ error: "Failed to create data", details: error.message });
  }

})




app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});



