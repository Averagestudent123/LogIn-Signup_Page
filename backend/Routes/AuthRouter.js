const { signup, login } = require('../Controller/AuthController');
const { signupValidation, loginValidation } = require('../Middleware/AuthValidation');
const { verifyToken } = require('../Middleware/AuthMiddleware');
const router = require('express').Router();

router.post('/login', loginValidation, login);
router.post('/signup', signupValidation, signup);

// Protected route — returns logged-in user info
router.get('/me', verifyToken, async (req, res) => {
    const userModel = require('../Model/User');
    try {
        const user = await userModel.findById(req.user.id).select('-password');
        if (!user) return res.status(404).json({ message: 'User not found', success: false });
        res.status(200).json({ success: true, user });
    } catch (err) {
        res.status(500).json({ message: 'Internal server error', success: false });
    }
});

module.exports = router;
