var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var communityRouter  = require('./routes/community/auth')
/**
 * graphql
 */
// var usersRouter = require('./routes/users');

// json-server
const jsonServer = require('json-server')
const router = jsonServer.router('./mock/data.json')
const middlewares = jsonServer.defaults()

 
//graphql
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
var app = express();
/**
 * cors跨域 
 */
var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Credentials','true');
  next();
};
app.use(allowCrossDomain)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/community',communityRouter)
app.use('/', indexRouter);
// app.use('/users', usersRouter);


//json-server
const routerSport = jsonServer.router('./mock/sport.json')
app.use(middlewares)
app.use('/sport',routerSport)
console.log('JSON Server http://localhost:3000/api');

//graphql
// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
};

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}));




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



console.log('Express Serve SetUp http://localhost:3000');
console.log('GraphQL http://localhost:3000/graphql');

module.exports = app;

