const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(morgan());
// app.use(express.static(path.join(__dirname, '../public')));

app.use('/products/:id', express.static(__dirname + '/../public'));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});

