const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/products', (req, res) => {
  res.json([
    { id: 1, name: 'Laptop' },
    { id: 2, name: 'Keyboard' },
    { id: 3, name: 'Mouse' }
  ]);
});

app.listen(5000, () => console.log('✅ Product service running at http://localhost:5000'));
