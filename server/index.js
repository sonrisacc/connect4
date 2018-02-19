const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('dist'));
app.use('/api', router);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res) => {
  res.status(err.status || 500);
});

const port = process.env.PORT || 8080;
const host = 'localhost';

app.listen(port, () => {
  console.log(`listening on http://${host}:${port}`);
});
