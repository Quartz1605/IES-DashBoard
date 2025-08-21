// src/server.js
import express from "express"

const app = express();
const PORT = 3000;

// Middlewares
app.use(express.json());
app.use(cors({
  origin : "http://localhost:5173",
  credentials : true
}))

// Routes
app.get('/', (req, res) => {
  res.send('API is up 🚀');
});

app.get('/api/ping', (req, res) => {
  res.json({ message: 'pong' });
});

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({ error: 'Not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Server error' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
