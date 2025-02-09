const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const compression = require('compression');
const { default: helmet } = require('helmet');
const router = require('../routes/mainRoute');
const errorHandler = require('../middlewares/errorHandler');
const swagger = require('../utils/swagger/swagger');
const { connectRedis } = require('../databases/redis/redis');
const { mongodbConnect } = require('../databases/mongodb/mongodbConnect');
const cookieParser = require('cookie-parser')
const useragent = require('express-useragent');
const { sequelizeConnect, sequelizeSync } = require('../databases/mysql/mysqlConnect');


require("dotenv").config();
require('express-async-handler')

app.use(cors({
    origin: ['http://localhost:5500', 'http://127.0.0.1:5500','http://localhost:4200'],
    credentials: true,
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(compression())
app.use(helmet())
app.use(cookieParser())
app.use(useragent.express())

mongodbConnect();
connectRedis();
sequelizeConnect();
sequelizeSync();

app.use('/', router);
app.use('/', swagger);

app.use(errorHandler);


module.exports = app;