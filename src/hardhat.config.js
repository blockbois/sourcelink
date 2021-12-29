/*
Author: Jake Mathai
Purpose: Hardhat config
*/

require("@nomiclabs/hardhat-waffle");

require('./tasks/archiver')

process.env.WS_URL = 'wss://mainnet.infura.io/ws/v3/61bee94f08184b74ad949ff1e125a730'

module.exports = {
  'solidity': '0.8.4',
  'networks': {
    'mainnet': {
      'url': 'https://mainnet.infura.io/v3/61bee94f08184b74ad949ff1e125a730',
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
