const path = require('path');
const express = require('express');

const pages = ['business', 'contacts', 'investments', 'news', 'purchase', 'selling'];

const app = express();

app.use('/css', express.static(path.resolve(__dirname, '../src/css')));
app.use('/img', express.static(path.resolve(__dirname, '../src/img')));

app.set('view engine', 'pug')
app.set('views', path.resolve(__dirname, '../src/pug'))

app.get('/', function (req, res) {
  res.render('about')
})

pages.forEach(item => {
  app.get(`/${item}`, function (req, res) {
    res.render(item)
  })
})

app.listen(process.env.PORT || 8080);
