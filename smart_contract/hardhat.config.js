// https://eth-goerli.g.alchemy.com/v2/pghUz9-irwu49Fbd8K43_T3JnpE1UHHB
require('@nomiclabs/hardhat-waffle');

module.exports ={
 solidity: '0.8.9',
 networks: {
   goerli: {
     url: 'https://eth-goerli.g.alchemy.com/v2/pghUz9-irwu49Fbd8K43_T3JnpE1UHHB',
     accounts: ['4a588658fa56cc0934324d187252033b9e12ec2241a417705a620b1d7594fe86']
   }
 }
}