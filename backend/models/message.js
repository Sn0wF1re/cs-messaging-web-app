const { model, Schema, default: mongoose } = require('mongoose');

const messageSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer'
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  message: {
    type: String,
    required: true
  },
  assignedTo: String,
  isRead: Boolean
});

module.exports = model('Message', messageSchema);