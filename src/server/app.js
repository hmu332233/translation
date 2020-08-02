const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')

const indexRouter = require('./routes');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

let staticFilePath = path.join(__dirname, '../../public');
if (process.env.NODE_ENV !== 'production') {
  staticFilePath = path.join(__dirname, '../../dist');
} 
app.use(express.static(staticFilePath));

app.use('/', indexRouter);


module.exports = app;
