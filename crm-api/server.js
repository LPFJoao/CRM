const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend OK' });
});

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
