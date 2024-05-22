    const express = require('express');
    const { registerMentor } = require('../controllers/mentorController');
    const router = express.Router();

    router.post('/register', registerMentor);

    module.exports = router;
