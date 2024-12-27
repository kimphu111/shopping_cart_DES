const app = require('./src/app/app');
const port = 8000;
const cors = require('cors');
const express = require('express');
const mainRoute = require('./src/routes/mainRoute');
const billingRoute = require('./src/routes/userRoute/productRoute');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', mainRoute);
app.use('/api', billingRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
