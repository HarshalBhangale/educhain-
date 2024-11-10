import { ethers } from 'ethers'
import LENDING_POOL from '@/lib/abi/LendingPool.json';
import COMMUNITY_UNION from '@/lib/abi/CommunityUnion.json';
import NIMBUS_FINANCE_JSON from '@/lib/abi/NimbusFinance.json';
import LOAN_CONTRACT_JSON from '@/lib/abi/LoanProtocol.json';


export const LENDING_POOL_ADDRESS = '0x92589b38d3B5d32318b328B985408babF4379d3F';
// export const COLLATERAL_MANAGER_ADDRESS = '0x80680813A9B99d550eD5F815aA451f137A736Bd6';
export const NIMBUS_FINANCE = '0xe3C1dB3A836727dEfc413cdb8E2ee227981cFbc9';


export const COMMUNITY_UNION_ADDRESS = '0x87D7E59a37261c3438a70F769B7b2DB5A79Fb927';
export const GOVERNANCE_ADDRESS = '0x07Bf0C7c2168647642f1E9fb4076cdEF0aDb4D6D';

export const LOAN_CONTRACT = '0xbA21243Bfb918F9a047f94Ef11914Afd0cE16A4b'
export const STAKING_CONTRACT = '0x09dDF8f56981deC60e468e2B85194102a3e2E124'

export const NIMBUS_TOKEN_ADDRESS = '0x7c6aa54Eaeea04Cf8950b1451faF0B21CB6037c2';
export const STAKED_EDU_ADDRESS = '0xfeEd714CCA799FA57e6aE25f8FE009Dd4fA854e3';
export const USDC_EDUCHAIN ="0x77721D19BDfc67fe8cc46ddaa3cc4C94e6826E3C";
export const NATIVE_TOKEN_STAKING ="0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";

// OwnerWallet = 0xBB79D409D53E7E0bE4E412465dEBee16A7E208f2;


export function getCommunityUnionContract(provider: ethers.providers.Web3Provider) {
    return new ethers.Contract(COMMUNITY_UNION_ADDRESS, COMMUNITY_UNION.abi, provider.getSigner());
}

export function getLendingPoolContract(provider: ethers.providers.Web3Provider) {
    return new ethers.Contract(LENDING_POOL_ADDRESS, LENDING_POOL.abi, provider.getSigner());
}

export function getLoanProtocolContract(provider: ethers.providers.Web3Provider) {
    return new ethers.Contract(LOAN_CONTRACT, LOAN_CONTRACT_JSON.abi, provider.getSigner());
}

export function getNimbusFinanceContract(provider: ethers.providers.Web3Provider) {
    return new ethers.Contract(LOAN_CONTRACT, LOAN_CONTRACT_JSON.abi, provider.getSigner());
}