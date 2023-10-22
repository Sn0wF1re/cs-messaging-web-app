const { model, Schema } = require('mongoose');

const responseSchema = new Schema({
  messageId: {
    type: Schema.Types.ObjectId,
    ref: 'Message'
  },
  agentId: {
    type: Schema.Types.ObjectId,
    ref: 'Agent'
  },
  response: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    required: true,
    default: Date.now
  }
});

module.exports = model('Response', responseSchema);