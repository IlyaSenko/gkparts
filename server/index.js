const path = require('path');
const express = require('express');

const pages = ['projects' ,
              'vacancies',
              'articles',
              'press',
              'videos',
              "selling-crops",
              "selling-flour",
              "selling-other",
              "purchase",
              "complexes",
              'contacts',
              "ukraine",
              "belarus",
              "eu"
              ];

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
  res.sendFile(path.resolve(__dirname, '../src/pug/index.html'))
})

pages.forEach(item => {
  app.get(`/${item}`, function (req, res) {
    res.sendFile(path.resolve(__dirname, `../src/pug/${item}.html`))
  })
})

app.listen(process.env.PORT || 8080);
