const express = require('express');
const router = express.Router();
const convoHistoryController = require('../controllers/convoHistory');

// API endpoint for fetching conversation history
router.get('/conversation-history/:userId', convoHistoryController.getConvoHistory);

module.exports = router;
