const express = require("express");
const router = express.Router();
const userRoute = require('./userRoute/userRoute')
const productRoute = require('./userRoute/productRoute')

router.use('/api', userRoute);
router.use('/api', productRoute);



module.exports = router;