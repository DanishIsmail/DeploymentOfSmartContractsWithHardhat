const { ethers } = require("hardhat");

main = async () => {
  const [deployer] = await ethers.getSigners();

  const Token = await ethers.getContractFactory("Token");
  const token = await Token.deploy();
  console.log("token address", token.address);
};

main().then(() =>
  process.exit(0).catch((error) => {
    console.log("error", error);
    process.exit(1);
  })
);
