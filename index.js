const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');
require('dotenv').config();
require('./db');
const port = process.env.PORT || 8001;

app.use(bodyParser.json());
app.use('/users', userRoutes);
app.use('/task', taskRoutes);

app.get('/', (req, res) => {
  res.send({
    message: 'Api is working',
  });
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
