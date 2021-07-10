let pullTable = require('../views/auth/config');
var express = require('express');
var app = express();

app.get('/', async (req, res, next) => {
  try {
    const result = await pullTable.pullTable();
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});

app.listen(5000, () => {console.log('Server is running..')});