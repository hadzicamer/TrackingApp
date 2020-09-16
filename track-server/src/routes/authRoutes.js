const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = mongoose.model('User');

const router = express.Router();

router.post('/signup', async (req, res) => {
    const { email, password } = req.body;

    const user = new User({ email, password });
    await user.save();

    const token = jwt.sign({ userId: user._id }, 'TEST');
    res.send({ token });
});

router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(422).send({ error: "Must provide email and password!" })
    }

    const user = await User.findOne({ email });
    // findOne ce naci usera ili vratiti null
    if (!user) {
        return res.status(404).send({ error: "Email not found" });
    }
    try {
        await user.comparePassword(password);
        const token = jwt.sign({ userId: user._id }, "TEST");
        res.send({ token });
    } catch (err) {
        return res.status(401).send({ error: "Unauthorized" });
    }

});

module.exports = router;