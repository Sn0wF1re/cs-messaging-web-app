const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customer');

// post customer
router.post('/customers', customerController.postCustomer);

// get customers
router.get('/customers', customerController.getCustomers);

// get customer
router.get('/customers/:id', customerController.getCustomer);

// delete customer
router.delete('/customers/:id', customerController.deleteCustomer);

// update customer
router.put('/customers/:id', customerController.updateCustomer);

module.exports = router;