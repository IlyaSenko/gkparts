import path from 'path'
import express from 'express'

const app = express();

app.use('/', express.static(path.resolve(__dirname, '../src/')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../src/html/index.html'));
});

app.get('/ex', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../src/html/ex.html'));
});

app.listen(process.env.PORT || 8080);
