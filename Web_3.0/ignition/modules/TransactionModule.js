const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("TransactionModule", (m) => {
  const transaction = m.contract("Transaction");
  return { transaction };
});