const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 8001;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send({
    message: 'Api is working',
  });
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
