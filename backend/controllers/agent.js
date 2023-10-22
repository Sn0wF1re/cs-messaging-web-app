const Agent = require('../models/agent');

// post an agent
const postAgent = async (req, res) => {
  const agent = new Agent({
    username: req.body.name
  });

  try {
    const newAgent = await agent.save();
    res.status(201).json(newAgent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// get agents
const getAgents = async (req, res) => {
  try {
    const agents = await Agent.find();
    res.json(agents);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete an agent
const deleteAgent = async (req, res) => {
  try {
    const agentId = req.params.id;
    const deletedAgent = await Agent.findByIdAndDelete(agentId);
    res.json(deletedAgent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAgents,
  postAgent,
  deleteAgent
};
