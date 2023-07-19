import { ethers } from "ethers";
import { ACTIVE_CHAIN_ID } from "../util/constants";
import { SECURESIGN_CONTRACT } from "./metadata";
import { CategoryNFT } from "./metadata";

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

  // Wait for the transaction to be confirmed
  const receipt = await tx.wait();

  return receipt;
};

export async function findAndMintToken(to) {
  let tokenId = 1;
  const signer = await getSigner();

  const categoryContract = new ethers.Contract(
    "0x1707dDe9a71334686E785bC80895Bb75ae6215b2",
    CategoryNFT.abi,
    signer
  );
  try {
    let exists = await categoryContract.tokenExists(tokenId);
    while (exists) {
      tokenId += 1;
      exists = await categoryContract.tokenExists(tokenId);
    }
    const res = await mintNFT(categoryContract, to, tokenId);
    console.log(`Minted token ${tokenId} to ${to}`);
    return res
  } catch (error) {
    console.error(`Failed to mint token to ${to}: `, error);
  }
}

export async function mintNFT(categoryContract, toAddress, tokenId) {
  // Call the mint function of the NFT contract
  const gasLimit = 1000000;
  const tx = await categoryContract.mintNFT(toAddress, tokenId, { gasLimit });
  const receipt = await tx.wait();

  console.log("NFT minted! Transaction receipt:", receipt);

  return receipt;
}
