const express = require( 'express' );
const app = express();
const nunjucks = require('nunjucks');

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});

app.get('/', function (req, res) {
  res.render('index');
  console.log('rendered');
});


app.listen(2007, function(){
  console.log('We out here');
});
