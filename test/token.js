const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Token contract", () => {
  it("Deployment should assign the total supply of token to the owner", async () => {
    const [owner] = await ethers.getSigners(); //getting the owner
    // console.log("owner", owner);

    const Token = await ethers.getContractFactory("Token"); //creating the token instance

    const hardhatToken = await Token.deploy(); //deploying the contract

    const ownerBalance = await hardhatToken.balanceOf(owner.address);

    console.log("owner address", owner.address);

    expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
  });
});
