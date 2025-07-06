const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const headlines = [
  "Why Cake & Co is Mumbai's Sweetest Spot in 2025",
  "Top 5 Reasons Cake & Co Dominates the Dessert Scene",
  "Discover the Magic of Cake & Co – Mumbai's Must-Try Bakery",
  "From Dough to Dominance: Cake & Co’s Success Story",
  "Baking the Future: Inside Cake & Co’s Sweet Empire"
];

app.post('/business-data', (req, res) => {
  const { name, location } = req.body;
  res.json({
    rating: (4 + Math.random()).toFixed(1),
    reviews: Math.floor(Math.random() * 500),
    headline: headlines[Math.floor(Math.random() * headlines.length)]
  });
});

app.get('/regenerate-headline', (req, res) => {
  res.json({
    headline: headlines[Math.floor(Math.random() * headlines.length)]
  });
});

app.listen(5000, () => console.log('Backend running on port 5000'));

