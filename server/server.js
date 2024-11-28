// const app = require('./src/app/app');
// const port = 8000;
// const https = require("https");
// const fs = require("fs");

// const options = {

//   key: fs.readFileSync('./key.pem'),

//   cert: fs.readFileSync('./cert.pem'),

// };
// const server = https.createServer(options, app);




const express = require('express')
const { mysqlConnect } = require('./src/databases/mysql/mysqlConnect')
const { auth } = require('./src/middlewares/auth')


const app = express()
const port = 8000
mysqlConnect();

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})