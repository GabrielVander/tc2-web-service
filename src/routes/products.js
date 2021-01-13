const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Get all products');
});

router.post('/', (req, res) => {
  res.send('Add product with payload: ' + req.body);
});

router.get('/:productId', (req, res) => {
  res.send(`Get product with id ${req.params.productId}`);
});

router.delete('/:productId', (req, res) => {
  res.send(`Delete product with id ${req.params.productId}`);
})

module.exports = router;
