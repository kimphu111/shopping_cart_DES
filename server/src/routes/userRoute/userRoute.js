const express = require("express");
const router = express.Router();

const loginRoute = require('./loginRoute/loginRoute')
const currentRoute = require('./currentRoute/currentRoute')
const logoutRoute = require('./logoutRoute/logoutRoute')
const registerRoute = require('./registerRoute/registerRoute');
const refreshRoute = require('./refreshCurrentRoute/refreshCurrentRoutea')
const vipRoute = require('./vip_adminRoute/vipRoute')
const adminRoute = require('./vip_adminRoute/adminRoute')
const db = require('../../configs/database');
// const {query} = require("../../models/userMysqlModel");

router.use('/users', loginRoute);
router.use('/users', currentRoute);
router.use('/users', logoutRoute);
router.use('/users', registerRoute);
router.use('/users', refreshRoute);
router.use('/users', vipRoute);
router.use('/users', adminRoute);


router.get('/users', async (req, res) => {
    try {
        const [users] = await db.query('SELECT * FROM users'); // Truy vấn bảng users từ MySQL
        console.log("Fetched users:", users); // Log kết quả ra console
        res.json(users); // Trả về dữ liệu người dùng dưới dạng JSON
    } catch (error) {
        console.error("Database query error:", error); // Log lỗi nếu có
        res.status(500).json({ message: 'Error fetching users', error });
    }
});


router.put('/users/:id', async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    try {
        const [result] = await db.execute('UPDATE users SET status = ? WHERE id = ?', [status, id]);

        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'User status updated successfully' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Error updating user status:', error);
        res.status(500).json({ message: 'Error updating user status', error });
    }
});

const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        return res.status(403).json({ message: 'No token provided' });
    }

    // Giải mã token và kiểm tra tính hợp lệ
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' });
        }
        req.user = user; // Lưu thông tin người dùng vào req.user
        next();
    });
};

router.get('/users', authenticateToken, async (req, res) => {
    try {
        const { userId } = req.user;

        // Lấy thông tin người dùng từ database
        const [rows] = await db.execute('SELECT id, username, email, status FROM users WHERE id = ?', [userId]);
        if (rows.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        const user = rows[0];

        // Kiểm tra trạng thái tài khoản
        if (user.status === 'blocked') {
            return res.status(403).json({ message: 'Account is blocked' });
        }

        res.status(200).json({
            id: user.id,
            username: user.username,
            email: user.email,
        });
    } catch (error) {
        console.error('Error fetching current user:', error);
        res.status(500).json({ message: 'Error fetching user data' });
    }
});


module.exports = router;