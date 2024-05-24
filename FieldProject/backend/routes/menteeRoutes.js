const express = require('express');
const { registerMentee ,getMenteesByYear,getMenteeById} = require('../controllers/menteeController');
const router = express.Router();

router.post('/register', registerMentee);
router.get('/year/:year', getMenteesByYear);
router.get('/:id', getMenteeById);


module.exports = router;
