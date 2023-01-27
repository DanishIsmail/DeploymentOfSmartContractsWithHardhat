/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox");

const ALCHEMY_API_KEY = "e0_0rZp5T_uTwNPsG2vCuJznCfgtIglO";
const GOERLI_PRIVATE_KEY =
  "03b0f6f55ffbb14f947243799cdb21854527ee5efe87d0ae7c5613b3bee7d0b6";
module.exports = {
  solidity: "0.8.17",

  networks: {
    GOERLI: {
      url: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${GOERLI_PRIVATE_KEY}`],
    },
  },
};
