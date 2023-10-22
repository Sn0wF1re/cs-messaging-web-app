const { model, Schema } = require('mongoose');
require('mongoose-type-email');

const agentSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  assigned: Array
});

module.exports = model('Agent', agentSchema);
