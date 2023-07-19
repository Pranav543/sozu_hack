<p align='center'>
    <img src='./img/logo_3_2.png' width=400/>
</p>

SecureSign

###

SecureSign is a prototype web3 implementation of esignature collection built on Mantle smart contracts and IPFS.

Enables Docusign-like capabilities / use-cases using web3 infrastructure.

Built for the Road to Web3 hackathon 2022.

### Benefits

- SecureSign enables anyone to create and collect esignature against documents without a vendor agreement. A polygon smart contract is deployed for each request.
- Each packet of documents for esignature is made accessible at an IPFS url.
- When the esignature is completed, an NFT is generated that links both the signer's signature and the documents being agreed on.
- Hosted documents and the request are immutable.
- Smart contract deployed on Mantle which marks the progress/fulfillment of the esignature request. The contract can only be marked completed by the designated signer address at time of final signature.
- View history of requests and completed esignatures using the covalent chain history API directly from the app.
- An individual in the context of the SecureSign application is the pairing of a canvas (handwritten) signature and wallet signature/address.



