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
  queryParameter: 'lang',
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
app.use('/js', express.static(path.resolve(__dirname, '../src/js')));
app.use('/images', express.static(path.resolve(__dirname, '../src/images')));
app.use(express.static(__dirname + '../src/pug'))

app.get('/', function (req, res) {
  res.render('index')
})

app.get('/en', function (req, res) {
  res.render('index')
})

app.get('/ua', function (req, res) {
  res.render('index')
})

app.get('/sitemap.xml', function(req, res){
    res.contentType('application/xml');
    res.sendFile(path.join(__dirname , 'sitemap.xml'));
});

pages.forEach(item => {
  app.get(`/${item}`, function (req, res) {
    res.render(item)
  })
})

pages.forEach(item => {
  app.get(`/${item}/ua`, function (req, res) {
    res.render(item)
  })
})

pages.forEach(item => {
  app.get(`/${item}/en`, function (req, res) {
    res.render(item)
  })
})

app.get('/robots.txt', function (req, res) {
    res.type('text/plain');
    res.send("User-agent: * \nSitemap: http://ukrainefoods.com.ua/sitemap.xml");
});

app.listen(process.env.PORT || 8090);
