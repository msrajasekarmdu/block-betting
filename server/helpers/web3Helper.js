let { Web3 } = require("web3");
let BSCUSDTConABI = require("../Abi/BSC-USDT-ABI.json");
const BscUSDT = {
  contractAddress: "0x55d398326f99059ff775485246999027b3197955",
  abi: BSCUSDTConABI,
};
const web3 = new Web3("https://bsc-dataseed1.binance.org/");
const BSCUSDTWeb3Contract = new web3.eth.Contract(
  BscUSDT.abi,
  BscUSDT.contractAddress
);

exports.getBalances = async function (data = {}) {
  const { address = "" } = data;
  let result = await BSCUSDTWeb3Contract.methods.balanceOf(address).call();
  if (result > 0) {
    result = web3.utils.fromWei(result, "ether");
    result = parseFloat(result);
    return { status: true, result };
  } else {
    return { status: false, result: 0 };
  }
};
