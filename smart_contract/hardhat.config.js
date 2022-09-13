// https://eth-ropsten.alchemyapi.io/v2/oJySETgUqHFUkDI5450BAV8wmtCX2GqN

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/oJySETgUqHFUkDI5450BAV8wmtCX2GqN',
      accounts: ['5c460f795f35c5e996d100e6753ef26b4fae91f7e3aea4f4a7daed62ca62362d']
    }
  }
}