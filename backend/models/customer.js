const { model, Schema } = require('mongoose');
require('mongoose-type-email');

const customerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: Schema.Types.Email,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
});

module.exports = model('Customer', customerSchema);