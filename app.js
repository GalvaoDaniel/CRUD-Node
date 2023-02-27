const express = require('express');
const personRouter = require('./routes/personRouter');

const app = express();
const port = 3000;

app.use('/person', personRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000, () => { console.log("Server Running!!") });