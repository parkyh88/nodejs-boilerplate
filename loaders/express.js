const cookieParser = require('cookie-parser');
const logger = require('morgan');

//main
const indexRouter = require('../routes/index');

function expressLoader(express, app, path){    
  app.set("views", path.join(__dirname, '..', "views"));
  app.set('view engine', 'ejs');  
  app.use(logger('dev'));
  app.use(cookieParser());  

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));  
  app.use(express.static(path.join(__dirname, '..', "public")));

  app.use('/', indexRouter);

  return app;
}

module.exports.expressLoader = expressLoader;
