const express = require("express");
const router = express.Router();
const db = require('../../configs/database');
const cors = require('cors');

// Không cần phải sử dụng body-parser ở đây nữa
router.use(cors());

router.get('/billing', async (req, res) => {
    try {
        const [users] = await db.query('SELECT * FROM billing');
        res.json(users);
    } catch (error) {
        console.error("Database query error:", error); // Log lỗi nếu có
        res.status(500).json({ message: 'Error fetching users', error });
    }
});

router.post('/billing', (req, res) => {
    console.log('Body nhận được:', req.body);

    const { productName, userName, phone, address, date } = req.body;

    if (!productName || !userName || !phone || !address || !date) {
        console.error('Thiếu dữ liệu đầu vào:', req.body);
        return res.status(400).json({ message: 'Missing required fields' });
    }

    const formattedDate = new Date(date).toISOString().slice(0, 19).replace('T', ' ');

    console.log('Formatted date:', formattedDate);

    const sql = 'INSERT INTO billing (productName, userName, phone, address, date) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [productName, userName, phone, address, formattedDate], (err, result) => {
        if (err) {
            console.error('Lỗi SQL:', err);
            return res.status(500).json({ message: 'Error inserting billing data' });
        }
        console.log('Insert thành công:', result);
        return res.status(201).json({ message: 'Billing added', id: result.insertId });
    });
});

router.delete('/billing/:id', (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM billing WHERE id = ?', id, (err, result) => {
        if (err) throw err;
        res.json({ message: 'billing deleted', id: id });
    });
});

module.exports = router;
