const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(80, () => {
  console.log('Server has been started');
});