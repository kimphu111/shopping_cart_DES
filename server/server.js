const app = require('./src/app/app');
const port = 8000;
const https = require("https");
const fs = require("fs");
const cors = require('cors');
const bodyParser = require('body-parser');
const mainRoute = require('./src/routes/mainRoute');


app.use(cors());
app.use(bodyParser.json());

// Sử dụng định tuyến từ mainRoute
app.use('/', mainRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})