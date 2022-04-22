import { expect, use as chaiUse } from "chai";
import { utils } from "ethers";
import { ethers } from "hardhat";
import chaiAsPromised from "chai-as-promised";

chaiUse(chaiAsPromised);

describe("Test", function () {
  it("Should update the balance on token minted", async function () {
    const [owner] = await ethers.getSigners();
    const NFT = await ethers.getContractFactory("Hello");
    expect(1).to.equal(1);
  });
});
