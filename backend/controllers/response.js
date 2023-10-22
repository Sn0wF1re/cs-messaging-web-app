const Response = require('../models/response');
const Message = require('../models/message');

// Post a response
const postResponse = async (req, res) => {
  const { agentId } = req.params;
  const { response } = req.body;
  const messageAssigned = await Message.findOne({ assignedTo: agentId });
  await Message.findByIdAndUpdate(messageAssigned.id, { isRead: true })
  const payload = new Response({
    agentId,
    messageId: messageAssigned.id,
    response,
  });

  try {
    const newResponse = await payload.save();
    res.status(201).json(newResponse);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all responses
const getResponses = async (req, res) => {
  try {
    const responses = await Response.find();
    res.json(responses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get a response
const getResponse = async (req, res) => {
  const { responseId } = req.params;
  try {
    const response = await Response.findById(responseId);
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete response
const deleteResponse = async (req, res) => {
  try {
    const { responseId } = req.params;
    const deletedResponse = await Response.findByIdAndDelete(responseId);
    res.json(deletedResponse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  postResponse,
  getResponses,
  getResponse,
  deleteResponse,
};
