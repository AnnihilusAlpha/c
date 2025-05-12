const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

// Dummy Product Catalog
const products = [
  { id: 1, name: 'iPhone 14' },
  { id: 2, name: 'Samsung Galaxy S23' },
  { id: 3, name: 'MacBook Pro' },
  { id: 4, name: 'Dell XPS 13' },
  { id: 5, name: 'Sony Headphones' }
];

// Search API
app.get('/search', (req, res) => {
  const q = req.query.q?.toLowerCase() || '';
  const result = products.filter(p => p.name.toLowerCase().includes(q));
  res.json(result);
});

app.listen(5000, () => console.log('Server running on port 5000'));
