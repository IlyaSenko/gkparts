const path = require('path');
const express = require('express');

const pages = ['business', 'contacts', 'investments', 'news', 'purchase', 'selling'];

const app = express();

app.use('/css', express.static(path.resolve(__dirname, '../src/css')));
app.use('/img', express.static(path.resolve(__dirname, '../src/img')));
app.use('/images', express.static(path.resolve(__dirname, '../src/images')));

// app.set('view engine', 'pug')
// app.set('views', path.resolve(__dirname, '../src/pug'))

// app.get('/', function (req, res) {
//   res.render('about')
// })

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../src/pug/test.html'))
})

app.get('/news', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../src/pug/news.html'))
})

app.get('/business', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../src/pug/business.html'))
})

app.get('/business', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../src/pug/purchase.html'))
})

pages.forEach(item => {
  app.get(`/${item}`, function (req, res) {
    res.sendFile(path.resolve(__dirname, `../src/pug/${item}.html`))
  })
})

app.listen(process.env.PORT || 8080);
