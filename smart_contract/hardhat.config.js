

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/-Qi3Yla4ZToumQwUupMryI_moduqUlTX' ,
      accounts: ['01127e11565433c3e8f52c23e8a55a9b3bfbb0a356a14f250e0e7c0bd01cda3d'],
    },
  },
};