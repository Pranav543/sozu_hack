import { NFTStorage, File } from 'nft.storage';
import { createJsonFile } from ".";
import { NFT_STORAGE_API_KEY } from "./constants";

const client = new NFTStorage({ token: NFT_STORAGE_API_KEY });

export const createSignatureNFT = async (
  name,
  description,
  ownerAddress,
  signatureData
) => {

  const blob = await (await fetch(signatureData)).blob();
  const file = new File([blob], "signature.jpg", {
    type: "image/jpeg",
    lastModified: new Date(),
  });

  const metadata = await client.store({
    name: name,
    description: description,
    image: file
  });

  return metadata;
};




export const getMintedNFT = async (cid) => {
  const ipfsGatewayUrl = `https://ipfs.io/ipfs/${cid}`;
  const response = await fetch(ipfsGatewayUrl);
  const metadata = await response.json();
  return metadata;
};


