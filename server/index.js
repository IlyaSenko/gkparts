const path = require('path');
const express = require('express');
var cookieParser = require('cookie-parser');
var i18n = require('i18n');


const app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname,'../src/pug'));

i18n.configure({
  defaultLocale: 'ua',
  locales:['en', 'ua'],
  cookie: 'lang',
  directory: __dirname + '/locales'
});

app.use(cookieParser());

app.use(i18n.init);

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

app.use('/css', express.static(path.resolve(__dirname, '../src/css')));
app.use('/img', express.static(path.resolve(__dirname, '../src/img')));
app.use('/images', express.static(path.resolve(__dirname, '../src/images')));

// app.set('view engine', 'pug')
app.use(express.static(__dirname + '../src/pug'))

// app.get('/', function (req, res) {
//   res.render('about')
// })

app.get('/', function (req, res) {

  // res.cookie('lang', 'ua');
  // console.log(res.__('Hello i18n'));
  // // res.setLocale(req.cookies.lang);
  // res.__('Hello i18n')
  res.render('index')
})

pages.forEach(item => {
  app.get(`/${item}`, function (req, res) {
    res.render(item)
  })
})

app.listen(process.env.PORT || 8080);
