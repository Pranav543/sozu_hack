import axios from "axios";
import { Web3Storage } from 'web3.storage';
import { IPFS_BASE_URL, WEB3_STORAGE_API_KEY } from "./constants";
console.log("WEB3_STORAGE_API_KEY: ", WEB3_STORAGE_API_KEY)

export const saveObject = async (obj, filename) => {
  const file = new File([JSON.stringify(obj)], filename || "metadata.json", {
    type: "application/json",
  });
  const client = new Web3Storage({ token: WEB3_STORAGE_API_KEY });
  const cid = await client.put([file], { wrapWithDirectory: false });
  return cid;
};

export const uploadFiles = async (
  files,
  title,
  description,
  signerAddress,
  contractAddress
) => {
  const resultObject = {
    title,
    signerAddress,
    description,
    contractAddress,
    files: [],
  };

  for (let i in files) {
    const f = files[i];
    const file = new File([f], f.name);
    const client = new Web3Storage({ token: WEB3_STORAGE_API_KEY });
    const cid = await client.put([file]);
    resultObject.files.push({
      name: f.name,
      hash: cid,
      url: `https://ipfs.io/ipfs/${cid}`,
    });
  }

  return await saveObject(resultObject);
};

export async function fetchIPFSDoc(ipfsHash) {
  const url = `${IPFS_BASE_URL}/${ipfsHash}`;
  const response = await axios.get(url);
  console.log("fetch", response, url);
  return response;
}
