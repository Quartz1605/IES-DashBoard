import mongoose from "mongoose";

const { Schema } = mongoose;

// Transactions (income / expense)
const transactionSchema = new Schema({
  type: { type: String, enum: ["income", "expense"], required: true },
  category: { type: String, required: true }, // Groceries, Transport, etc.
  amount: { type: Number, required: true },
  date: { type: Date, required: true }, // must be passed from frontend
  notes: String
});

// Budget categories
const budgetSchema = new Schema({
  category: { type: String, required: true },
  limit: { type: Number, required: true },
  spent: { type: Number, default: 0 },
  month: { type: String, required: true } // e.g., "2025-08"
});

// Portfolio (stocks, crypto, etc.)
const portfolioSchema = new Schema({
  asset: { type: String, required: true },
  quantity: { type: Number, required: true },
  avgBuyPrice: { type: Number, required: true },
  currentPrice: { type: Number }, // updated from API
  lastUpdated: { type: Date } // set by frontend/API
});

// Watchlist
const watchlistSchema = new Schema({
  assets: [{ type: String, required: true }]
});

// Market data cache
const marketDataSchema = new Schema({
  symbol: { type: String, required: true },
  type: { type: String, enum: ["stock", "crypto", "index", "currency"], required: true },
  price: Number,
  changePercent: Number,
  volume: Number,
  lastUpdated: { type: Date } // no default
});

// News
const newsSchema = new Schema({
  title: String,
  source: String,
  url: String,
  sentiment: { type: String, enum: ["Bullish", "Bearish", "Neutral"] },
  publishedAt: { type: Date, required: true },
  cachedAt: { type: Date } // set when you cache from API
});

// Models
const Transaction = mongoose.model("Transaction", transactionSchema);
const Budget = mongoose.model("Budget", budgetSchema);
const Portfolio = mongoose.model("Portfolio", portfolioSchema);
const Watchlist = mongoose.model("Watchlist", watchlistSchema);
const MarketData = mongoose.model("MarketData", marketDataSchema);
const News = mongoose.model("News", newsSchema);

export { Transaction, Budget, Portfolio, Watchlist, MarketData, News };
