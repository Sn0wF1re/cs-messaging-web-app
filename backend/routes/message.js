const express = require('express');
const router = express.Router();

// Import controllers
const messageController = require('../controllers/message');

// Routes
router.post('/messages/', messageController.postMessage);
router.get('/messages', messageController.getMessages);
router.delete('/messages/:messageId', messageController.deleteMessage);

module.exports = router;