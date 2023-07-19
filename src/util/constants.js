export const COVALENT_KEY = process.env.REACT_APP_COVALENT_KEY; // covalent api key
export const NFT_STORAGE_API_KEY = process.env.REACT_APP_NFT_STORAGE_API_KEY; // nft port key
export const WEB3_STORAGE_API_KEY = process.env.REACT_APP_WEB3_STORAGE_KEY 

export const APP_NAME = "SecureSign";
export const APP_DESC = "Mantle-backed esignature requests";

export const CHAIN_OPTIONS = {
  5001: {
    name: "Mantle",
    url: "https://explorer.testnet.mantle.xyz/",
    id: 5001,
  }
};

export const ACTIVE_CHAIN_ID = CHAIN_OPTIONS["5001"];

export const EXAMPLE_FORM = {
  title: "Condo agreement",
  description: "Please agree to the included condo agreement documents",
  signerAddress: "0x8E5D12B8aE2E256CC2584E218d83A0ea43b2c305",
  files: [],
};


export const IPFS_BASE_URL = "https://ipfs.io/ipfs";

console.log("hashes", COVALENT_KEY, NFT_STORAGE_API_KEY, WEB3_STORAGE_API_KEY);
