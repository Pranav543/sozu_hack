// require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();

const config = {
  solidity: {
    compilers: [{ version: '0.8.17' }, { version: '0.6.11' }],
  },
};

module.exports = config;
