/*
Author: Jake Mathai
Purpose: Hardhat config
*/

require('@nomiclabs/hardhat-waffle')
require('@nomiclabs/hardhat-ethers')
require('@nomiclabs/hardhat-truffle5')
require('@openzeppelin/hardhat-upgrades')

require('./tasks/archiver')

process.env.WS_URL = 'wss://eth-mainnet.alchemyapi.io/v2/gCR-2pt8Rah5nvVlSIC1DHJobAeFgJy1'

module.exports = {
  'solidity': '0.8.4',
  'networks': {
    'mainnet': {
      'url': 'https://eth-mainnet.alchemyapi.io/v2/gCR-2pt8Rah5nvVlSIC1DHJobAeFgJy1',
      'chainId': 1,
    }
  },
  'defaultNetwork': 'mainnet',
  'namedAccounts': {
    'deployer': {
      'default': 0,
      1: 0
    }
  }
};
