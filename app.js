require('@babel/register');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const indexRouter = require('./routes/index.route');
const ssr = require('./middleware/renderComponent');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, '/public')));

app.use(ssr);
app.use(morgan('dev'));
app.use('/', indexRouter);

app.listen(3000, () => console.log('я задолбался работать'));
