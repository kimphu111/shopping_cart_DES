const app = require('./src/app/app');
const port = 8000;
const https = require("https");
const fs = require("fs");


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})