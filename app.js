const express = require( 'express' );
const app = express();
const nunjucks = require('nunjucks');
const routes = require('./routes');
const bodyParser = require('body-parser');

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.config;ure('views', {noCache: true});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', routes);

app.use(express.static("public"));

app.listen(2007, function(){
  console.log('We out here');
});
