/*
Author: Jake Mathai
Purpose: Hardhat config
*/

require('@nomiclabs/hardhat-waffle')
require('@nomiclabs/hardhat-ethers')
require('@nomiclabs/hardhat-truffle5')
require('@openzeppelin/hardhat-upgrades')

require('./tasks/archiver')
require('./tasks/sync')

providerUrls = {
  'mainnet': {
    'ws': 'wss://eth-mainnet.alchemyapi.io/v2/gCR-2pt8Rah5nvVlSIC1DHJobAeFgJy1',
    'http': 'https://eth-mainnet.alchemyapi.io/v2/gCR-2pt8Rah5nvVlSIC1DHJobAeFgJy1'
  },
  'rinkeby': {
    'ws': 'wss://eth-rinkeby.alchemyapi.io/v2/h3vGxbf05giVIMDSOqcylDyTFsZ290m9',
    'http': 'https://eth-rinkeby.alchemyapi.io/v2/h3vGxbf05giVIMDSOqcylDyTFsZ290m9'
  }
}

network = process.env.HARDHAT_NETWORK || 'mainnet'
process.env.NETWORK = network

process.env.HTTP_URL = providerUrls[network]['http']
process.env.WS_URL = providerUrls[network]['ws']

module.exports = {
  'solidity': '0.8.4',
  'networks': {
    'mainnet': {
      'url': providerUrls['mainnet']['http'],
      'chainId': 1,
    },
    'rinkeby': {
      'url': providerUrls['rinkeby']['http'],
      'chainId': 4,
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
