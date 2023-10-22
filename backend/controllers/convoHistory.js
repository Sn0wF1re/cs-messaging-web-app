const Message = require('../models/message');
const Response = require('../models/response');

const getConvoHistory = async (req, res) => {
  const { userId } = req.params;

  try {
    // Fetch all customer messages for the specified user, sorted by timestamp
    const messages = await Message.find({ userId }).sort({ timestamp: 1 });

    // Fetch all agent responses, sorted by timestamp
    const responses = await Response.find().sort({ timestamp: 1 });

    // Create an array to store the conversation history
    const conversationHistory = [];

    // Create a dictionary to associate responses with their messageId
    const responseMap = new Map();

    responses.forEach((response) => {
      if (response.messageId) {
        if (!responseMap.has(response.messageId.toString())) {
          responseMap.set(response.messageId.toString(), []);
        }
        responseMap.get(response.messageId.toString()).push(response);
      }
    });

    messages.forEach((message) => {
      conversationHistory.push({
        _id: message._id,
        body: message.message,
        timestamp: message.timestamp,
        isCustomer: true,
      });

      if (responseMap.has(message._id.toString())) {
        const associatedResponses = responseMap.get(message._id.toString());
        associatedResponses.forEach((response) => {
          conversationHistory.push({
            _id: response._id,
            body: response.response,
            timestamp: response.timestamp,
            isCustomer: false,
          });
        });
      }
    });

    res.status(200).json(conversationHistory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getConvoHistory,
};
