const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname + '-' + Date.now() + '.' + file.mimetype.split('/')[1]);
  }
});

var upload = multer({storage: storage});

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/form', (req, res) => {
  res.render('form');
});

app.post('/form', upload.single('image') ,(req, res) => {
  console.log(req.body);
  console.log(req.file);
  res.redirect('/list');
});

app.get('/list', (req, res) => {
  res.render('list');
});

app.listen(3000, () => {
  console.log('Server has been started');
});