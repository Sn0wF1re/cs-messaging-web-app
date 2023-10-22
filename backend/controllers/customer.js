const Customer = require('../models/customer');

// post a customer
const postCustomer = async (req, res) => {
  const customer = new Customer({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
  });

  try {
    const newCustomer = await customer.save();
    res.status(201).json(newCustomer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// get customers
const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get a customer
const getCustomer = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    res.json(customer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update a customer
const updateCustomer = async (req, res) => {
  try {
    const updatedCustomer = await Customer.updateOne(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name,
          email: req.body.email,
          phone: req.body.phone,
        }
      }
    );
    res.json(updatedCustomer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete a customer
const deleteCustomer = async (req, res) => {
  try {
    const deletedCustomer = await Customer.deleteOne({ _id: req.params.id });
    res.json(deletedCustomer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  postCustomer,
  getCustomers,
  getCustomer,
  updateCustomer,
  deleteCustomer
}