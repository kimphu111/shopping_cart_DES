// const express = require("express");
// const router = express.Router();
//
// const loginRoute = require('./loginRoute/loginRoute')
// const currentRoute = require('./currentRoute/currentRoute')
// const logoutRoute = require('./logoutRoute/logoutRoute')
// const registerRoute = require('./registerRoute/registerRoute');
// const refreshRoute = require('./refreshCurrentRoute/refreshCurrentRoutea')
// const vipRoute = require('./vipRoute/vipRoute')
//
// router.use('/users', loginRoute);
// router.use('/users', currentRoute);
// router.use('/users', logoutRoute);
// router.use('/users', registerRoute);
// router.use('/users', refreshRoute);
// router.use('/users', vipRoute);
//
//
//
//
// module.exports = router;

const express = require('express');
const router = express.Router();
const { login, register, Current, logout, refresh } = require('../controllers/authController');
const checkRole = require('../middleware/checkRole'); // Middleware kiểm tra role

// Đăng ký và Đăng nhập
router.post('/login', login);
router.post('/register', register);

// Route dành cho user đã đăng nhập
router.get('/current', Current); // Thông tin user hiện tại

// Route dành cho admin
router.get('/admin/users', checkRole('admin'), async (req, res) => {
    try {
        const users = await UserModel.find(); // Lấy tất cả người dùng
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users" });
    }
});

router.post('/logout', logout);
router.post('/refresh', refresh);

module.exports = router;
