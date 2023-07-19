import { ethers } from "ethers";
import { ACTIVE_CHAIN_ID } from "../util/constants";
import { SECURESIGN_CONTRACT } from "./metadata";

const getSigner = async () => {
  let signer;
    await window.ethereum.enable();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    signer = provider.getSigner();
  
  return signer;
};

export const getPrimaryAccount = async () => {
  let provider;
    if (window.ethereum) {
    await window.ethereum.enable();
    provider = new ethers.providers.Web3Provider(window.ethereum);
  } else {
    return undefined; // No supported account detected.
  }

  const accounts = await provider.listAccounts();
  return accounts[0];
};

export async function deployContract(title, signerAddress) {
  const signer = await getSigner();

  // Create an instance of a Contract Factory
  const factory = new ethers.ContractFactory(
    SECURESIGN_CONTRACT.abi,
    SECURESIGN_CONTRACT.bytecode,
    signer
  );

  const validatedAddress = ethers.utils.getAddress(signerAddress);

  // Start deployment, returning a promise that resolves to a contract object
  let contract;
  
    contract = await factory.deploy(title, validatedAddress);
    await contract.deployed();
  
  console.log("Contract deployed to address:", contract.address);
  return contract;
}

export const validAddress = (addr) => {
  try {
    ethers.utils.getAddress(addr);
    return true;
  } catch (e) {
    return false;
  }
};

export const markContractCompleted = async (contractAddress, signatureUrl) => {
  if (!contractAddress || !signatureUrl) {
    return {};
  }
  const signer = await getSigner();
  const securesignContract = new ethers.Contract(
    contractAddress,
    SECURESIGN_CONTRACT.abi,
    signer
  );
  const tx = await securesignContract.markCompleted(signatureUrl);
  const txHash = tx.hash;

  // Wait for the transaction to be confirmed
  const receipt = await signer.provider.waitForTransaction(txHash);
  return receipt;
};
