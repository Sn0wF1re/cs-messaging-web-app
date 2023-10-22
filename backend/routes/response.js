const express = require('express');
const router = express.Router();

const responseController = require('../controllers/response');

// Routes
router.post('/responses/:agentId', responseController.postResponse);
router.get('/responses', responseController.getResponses);
router.get('/responses/:responseId', responseController.getResponse);
router.delete('/responses/:responseId', responseController.deleteResponse);

module.exports = router;