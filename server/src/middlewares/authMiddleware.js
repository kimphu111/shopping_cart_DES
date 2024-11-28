const jwt = require('jsonwebtoken');
const UserModel = require('../models/usermodel');

const checkRole = (role) => {
    return async (req, res, next) => {
        try {
            const token = req.headers.authorization.split(' ')[1]; // Bearer token
            if (!token) {
                return res.status(401).json({ message: "No token provided" });
            }

            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
            const user = await UserModel.findOne({ email: decoded.user.email });

            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }

            if (user.role !== role) {
                return res.status(403).json({ message: `Access denied. You need to be an ${role}` });
            }

            req.user = user; // Store user in request for later use
            next();
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Server error" });
        }
    };
};

module.exports = checkRole;
