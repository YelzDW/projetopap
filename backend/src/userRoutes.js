const express = require('express');
const User = require('./userModel');
const { protect } = require('./authMiddleware');
const router = express.Router();

router.post('/login', async (req, res) => {
  const { name, password } = req.body;

  const user = await User.findOne({ name });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
    });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;
