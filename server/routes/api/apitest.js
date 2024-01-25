const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const apitest = require('../../controllers/apitest');

router.post(
  '/balances',
  [
    check('address', 'Address is required').not().isEmpty(),
  ],
  apitest.balances,
);

module.exports = router;
