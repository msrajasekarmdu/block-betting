const web3Helper = require("../helpers/web3Helper");
const { validationResult } = require("express-validator");

// @route   POST api/apitest/balances
// @desc    Get balance using address
// @access  Public
exports.balances = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { body: reqBody = {} } = req;
  const { address = "" } = reqBody;
  const balancesResp = await web3Helper.getBalances({ address });
  return res.json(balancesResp);
};
