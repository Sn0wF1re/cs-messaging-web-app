const express = require('express');
const router = express.Router();

const agentController = require('../controllers/agent');

// post agent
router.post('/agents', agentController.postAgent);

// get agents
router.get('/agents', agentController.getAgents);

// delete agent
router.delete('/agents/:id', agentController.deleteAgent);

module.exports = router;