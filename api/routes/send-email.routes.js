const express = require('express');
const router = express.Router();
const sendEmailController = require('../controllers/send-email.controller');

router.post('/', sendEmailController.sendEmail);

module.exports = router;
