const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Token contract", () => {
  let Token;
  let hardhatToken;
  let owner;
  let account1;
  let account2;
  let accounts;

  beforeEach(async () => {
    Token = await ethers.getContractFactory("Token"); //creating the token instance

    [owner, account1, account2, ...accounts] = await ethers.getSigners(); //getting the addresses

    hardhatToken = await Token.deploy(); //deploying the contract
  });

  describe("Deployment", () => {
    it("should assign the right owner", async () => {
      expect(await hardhatToken.owner()).to.equal(owner.address);
    });

    it("should assign the total supply of token to the owner", async () => {
      const ownerBalance = await hardhatToken.balanceOf(owner.address);

      expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
    });
  });

  describe("Transactions", async () => {
    it("transfer the token to other address", async () => {
      //transfer 20 token to account1
      await hardhatToken.transfer(account1.address, 20);

      let balanceOfAccount1 = await hardhatToken.balanceOf(account1.address);

      expect(balanceOfAccount1).to.equal(20);

      //transfer 10 token to account2
      await hardhatToken.transfer(account2.address, 10);

      let balanceOfAccount2 = await hardhatToken.balanceOf(account2.address);
      expect(balanceOfAccount2).to.equal(10);
    });
  });
});
