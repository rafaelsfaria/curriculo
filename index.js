const express = require('express');
const path = require('path')
const helmet = require('helmet')
const app = express();
const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');
app.use(express.static( path.join(__dirname,'public')))
app.use(helmet())

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log('app listens on 3000');
})