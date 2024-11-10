// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

// import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

// const JAN_1ST_2030 = 1893456000;
// const ONE_GWEI: bigint = 1_000_000_000n;

// const LockModule = buildModule("LockModule", (m) => {
//   const unlockTime = m.getParameter("unlockTime", JAN_1ST_2030);
//   const lockedAmount = m.getParameter("lockedAmount", ONE_GWEI);

//   const lock = m.contract("Lock", [unlockTime], {
//     value: lockedAmount,
//   });

//   return { lock };
// });

// export default LockModule;
const hre = require("hardhat");
const { ethers } = require("hardhat");
async function main() {
    const StakingContract = await hre.ethers.getContractFactory("StakingContract");
    const stakingContract = await StakingContract.deploy(ethers.utils.parseEther("0.01")); // Set minimum stake to 0.01 ETH
    await stakingContract.deployed();

    console.log("StakingContract deployed to:", stakingContract.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
