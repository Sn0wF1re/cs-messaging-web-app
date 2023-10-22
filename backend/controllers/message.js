const Message = require('../models/message');
const Agent = require('../models/agent');

// Post a message
const postMessage = async (req, res) => {
  const { userId, message } = req.body;

  try {
    // Create a new message
    const newMessage = new Message({
      userId,
      message,
      timestamp: new Date(),
    });

    // Find all agents
    const agents = await Agent.find();

    if (agents.length === 0) {
      // Handle the case when there are no agents
      res.status(400).json({ message: "No agents available to assign the message." });
    } else {
      // Calculate the index of the next agent to assign to (round-robin)
      const assignedToIndex = (await Message.countDocuments()) % agents.length;
      const agent = agents[assignedToIndex];

      newMessage.assignedTo = agent._id;

      // Update the agent's assigned field to add the new message's ID
      await Agent.updateOne(
        { _id: agent._id },
        { $push: { assigned: newMessage._id } }
      );
      
      await newMessage.save();
      res.status(201).json(newMessage);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getMessages = async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete message
const deleteMessage = async (req, res) => {
  try {
    const { messageId } = req.params;
    console.log(messageId);
    const deletedMessage = await Message.findByIdAndDelete(messageId);
    res.json(deletedMessage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
  getMessages,
  postMessage,
  deleteMessage
};