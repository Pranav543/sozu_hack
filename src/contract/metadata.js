export const SECURESIGN_CONTRACT = {
  _format: "hh-sol-artifact-1",
  contractName: "SecureSign",
  sourceName: "contracts/SecureSign.sol",
  abi: [
    {
      inputs: [
        {
          internalType: "string",
          name: "_title",
          type: "string",
        },
        {
          internalType: "address",
          name: "_signerAddress",
          type: "address",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "string",
          name: "oldStr",
          type: "string",
        },
        {
          indexed: false,
          internalType: "string",
          name: "newStr",
          type: "string",
        },
      ],
      name: "UpdatedResourceUrl",
      type: "event",
    },
    {
      inputs: [],
      name: "getResourceUrl",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getSignatureUrl",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getSigner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getTitle",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_signatureUrl",
          type: "string",
        },
      ],
      name: "markCompleted",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "newUrl",
          type: "string",
        },
      ],
      name: "updateResourceUrl",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
  bytecode:
    "0x60806040523480156200001157600080fd5b50604051620018cf380380620018cf833981810160405281019062000037919062000488565b620000576200004b620000fd60201b60201c565b6200010560201b60201c565b620000876040518060600160405280602b8152602001620018a4602b913983620001c960201b620005471760201c565b816001908162000098919062000739565b5080600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600560006101000a81548160ff0219169083151502179055505050620008ad565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6200026b8282604051602401620001e292919062000872565b6040516020818303038152906040527f4b5c4277000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506200026f60201b60201c565b5050565b60006a636f6e736f6c652e6c6f679050600080835160208501845afa505050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620002f982620002ae565b810181811067ffffffffffffffff821117156200031b576200031a620002bf565b5b80604052505050565b60006200033062000290565b90506200033e8282620002ee565b919050565b600067ffffffffffffffff821115620003615762000360620002bf565b5b6200036c82620002ae565b9050602081019050919050565b60005b83811015620003995780820151818401526020810190506200037c565b60008484015250505050565b6000620003bc620003b68462000343565b62000324565b905082815260208101848484011115620003db57620003da620002a9565b5b620003e884828562000379565b509392505050565b600082601f830112620004085762000407620002a4565b5b81516200041a848260208601620003a5565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620004508262000423565b9050919050565b620004628162000443565b81146200046e57600080fd5b50565b600081519050620004828162000457565b92915050565b60008060408385031215620004a257620004a16200029a565b5b600083015167ffffffffffffffff811115620004c357620004c26200029f565b5b620004d185828601620003f0565b9250506020620004e48582860162000471565b9150509250929050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200054157607f821691505b602082108103620005575762000556620004f9565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620005c17fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000582565b620005cd868362000582565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b60006200061a620006146200060e84620005e5565b620005ef565b620005e5565b9050919050565b6000819050919050565b6200063683620005f9565b6200064e620006458262000621565b8484546200058f565b825550505050565b600090565b6200066562000656565b620006728184846200062b565b505050565b5b818110156200069a576200068e6000826200065b565b60018101905062000678565b5050565b601f821115620006e957620006b3816200055d565b620006be8462000572565b81016020851015620006ce578190505b620006e6620006dd8562000572565b83018262000677565b50505b505050565b600082821c905092915050565b60006200070e60001984600802620006ee565b1980831691505092915050565b6000620007298383620006fb565b9150826002028217905092915050565b6200074482620004ee565b67ffffffffffffffff81111562000760576200075f620002bf565b5b6200076c825462000528565b620007798282856200069e565b600060209050601f831160018114620007b157600084156200079c578287015190505b620007a885826200071b565b86555062000818565b601f198416620007c1866200055d565b60005b82811015620007eb57848901518255600182019150602085019450602081019050620007c4565b868310156200080b578489015162000807601f891682620006fb565b8355505b6001600288020188555050505b505050505050565b600082825260208201905092915050565b60006200083e82620004ee565b6200084a818562000820565b93506200085c81856020860162000379565b6200086781620002ae565b840191505092915050565b600060408201905081810360008301526200088e818562000831565b90508181036020830152620008a4818462000831565b90509392505050565b610fe780620008bd6000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c80639d4a4e5a116100665780639d4a4e5a146100fa578063b3b2e5bb14610118578063d2fd02be14610136578063f2fde38b14610152578063ff3c1a8f1461016e57610093565b8063715018a6146100985780637ac3c02f146100a25780638da5cb5b146100c057806391a8b36a146100de575b600080fd5b6100a061018c565b005b6100aa6101a0565b6040516100b7919061078f565b60405180910390f35b6100c86101ca565b6040516100d5919061078f565b60405180910390f35b6100f860048036038101906100f39190610904565b6101f3565b005b610102610248565b60405161010f91906109cc565b60405180910390f35b6101206102e2565b60405161012d91906109cc565b60405180910390f35b610150600480360381019061014b9190610904565b610374565b005b61016c60048036038101906101679190610a1a565b610432565b005b6101766104b5565b60405161018391906109cc565b60405180910390f35b6101946105e3565b61019e6000610661565b565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6101fb6105e3565b7f2da9e2df85c09953beceaa98fb363086a2bf1fbd193ef58aeeaa742a479c6be560028260405161022d929190610b40565b60405180910390a180600290816102449190610d18565b5050565b60606102526105e3565b6004805461025f90610a76565b80601f016020809104026020016040519081016040528092919081815260200182805461028b90610a76565b80156102d85780601f106102ad576101008083540402835291602001916102d8565b820191906000526020600020905b8154815290600101906020018083116102bb57829003601f168201915b5050505050905090565b6060600280546102f190610a76565b80601f016020809104026020016040519081016040528092919081815260200182805461031d90610a76565b801561036a5780601f1061033f5761010080835404028352916020019161036a565b820191906000526020600020905b81548152906001019060200180831161034d57829003601f168201915b5050505050905090565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610404576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103fb90610e5c565b60405180910390fd5b80600490816104139190610d18565b506001600560006101000a81548160ff02191690831515021790555050565b61043a6105e3565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036104a9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104a090610eee565b60405180910390fd5b6104b281610661565b50565b6060600180546104c490610a76565b80601f01602080910402602001604051908101604052809291908181526020018280546104f090610a76565b801561053d5780601f106105125761010080835404028352916020019161053d565b820191906000526020600020905b81548152906001019060200180831161052057829003601f168201915b5050505050905090565b6105df828260405160240161055d929190610f0e565b6040516020818303038152906040527f4b5c4277000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610725565b5050565b6105eb610746565b73ffffffffffffffffffffffffffffffffffffffff166106096101ca565b73ffffffffffffffffffffffffffffffffffffffff161461065f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161065690610f91565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60006a636f6e736f6c652e6c6f679050600080835160208501845afa505050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006107798261074e565b9050919050565b6107898161076e565b82525050565b60006020820190506107a46000830184610780565b92915050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610811826107c8565b810181811067ffffffffffffffff821117156108305761082f6107d9565b5b80604052505050565b60006108436107aa565b905061084f8282610808565b919050565b600067ffffffffffffffff82111561086f5761086e6107d9565b5b610878826107c8565b9050602081019050919050565b82818337600083830152505050565b60006108a76108a284610854565b610839565b9050828152602081018484840111156108c3576108c26107c3565b5b6108ce848285610885565b509392505050565b600082601f8301126108eb576108ea6107be565b5b81356108fb848260208601610894565b91505092915050565b60006020828403121561091a576109196107b4565b5b600082013567ffffffffffffffff811115610938576109376107b9565b5b610944848285016108d6565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561098757808201518184015260208101905061096c565b60008484015250505050565b600061099e8261094d565b6109a88185610958565b93506109b8818560208601610969565b6109c1816107c8565b840191505092915050565b600060208201905081810360008301526109e68184610993565b905092915050565b6109f78161076e565b8114610a0257600080fd5b50565b600081359050610a14816109ee565b92915050565b600060208284031215610a3057610a2f6107b4565b5b6000610a3e84828501610a05565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610a8e57607f821691505b602082108103610aa157610aa0610a47565b5b50919050565b60008190508160005260206000209050919050565b60008154610ac981610a76565b610ad38186610958565b94506001821660008114610aee5760018114610b0457610b37565b60ff198316865281151560200286019350610b37565b610b0d85610aa7565b60005b83811015610b2f57815481890152600182019150602081019050610b10565b808801955050505b50505092915050565b60006040820190508181036000830152610b5a8185610abc565b90508181036020830152610b6e8184610993565b90509392505050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302610bc47fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610b87565b610bce8683610b87565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000610c15610c10610c0b84610be6565b610bf0565b610be6565b9050919050565b6000819050919050565b610c2f83610bfa565b610c43610c3b82610c1c565b848454610b94565b825550505050565b600090565b610c58610c4b565b610c63818484610c26565b505050565b5b81811015610c8757610c7c600082610c50565b600181019050610c69565b5050565b601f821115610ccc57610c9d81610aa7565b610ca684610b77565b81016020851015610cb5578190505b610cc9610cc185610b77565b830182610c68565b50505b505050565b600082821c905092915050565b6000610cef60001984600802610cd1565b1980831691505092915050565b6000610d088383610cde565b9150826002028217905092915050565b610d218261094d565b67ffffffffffffffff811115610d3a57610d396107d9565b5b610d448254610a76565b610d4f828285610c8b565b600060209050601f831160018114610d825760008415610d70578287015190505b610d7a8582610cfc565b865550610de2565b601f198416610d9086610aa7565b60005b82811015610db857848901518255600182019150602085019450602081019050610d93565b86831015610dd55784890151610dd1601f891682610cde565b8355505b6001600288020188555050505b505050505050565b7f4f6e6c79207468652064657369676e61746564207369676e65722063616e206360008201527f6f6d706c6574652074686520636f6e7472616374000000000000000000000000602082015250565b6000610e46603483610958565b9150610e5182610dea565b604082019050919050565b60006020820190508181036000830152610e7581610e39565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000610ed8602683610958565b9150610ee382610e7c565b604082019050919050565b60006020820190508181036000830152610f0781610ecb565b9050919050565b60006040820190508181036000830152610f288185610993565b90508181036020830152610f3c8184610993565b90509392505050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000610f7b602083610958565b9150610f8682610f45565b602082019050919050565b60006020820190508181036000830152610faa81610f6e565b905091905056fea264697066735822122008be063f6cb3b9aed4aeb4b7cd6407c3db1da8f04fc16836171135a53a978c9864736f6c634300081100334465706c6f79696e672061205365637572655369676e20636f6e74726163742077697468207469746c653a",
  deployedBytecode:
    "0x608060405234801561001057600080fd5b50600436106100935760003560e01c80639d4a4e5a116100665780639d4a4e5a146100fa578063b3b2e5bb14610118578063d2fd02be14610136578063f2fde38b14610152578063ff3c1a8f1461016e57610093565b8063715018a6146100985780637ac3c02f146100a25780638da5cb5b146100c057806391a8b36a146100de575b600080fd5b6100a061018c565b005b6100aa6101a0565b6040516100b7919061078f565b60405180910390f35b6100c86101ca565b6040516100d5919061078f565b60405180910390f35b6100f860048036038101906100f39190610904565b6101f3565b005b610102610248565b60405161010f91906109cc565b60405180910390f35b6101206102e2565b60405161012d91906109cc565b60405180910390f35b610150600480360381019061014b9190610904565b610374565b005b61016c60048036038101906101679190610a1a565b610432565b005b6101766104b5565b60405161018391906109cc565b60405180910390f35b6101946105e3565b61019e6000610661565b565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6101fb6105e3565b7f2da9e2df85c09953beceaa98fb363086a2bf1fbd193ef58aeeaa742a479c6be560028260405161022d929190610b40565b60405180910390a180600290816102449190610d18565b5050565b60606102526105e3565b6004805461025f90610a76565b80601f016020809104026020016040519081016040528092919081815260200182805461028b90610a76565b80156102d85780601f106102ad576101008083540402835291602001916102d8565b820191906000526020600020905b8154815290600101906020018083116102bb57829003601f168201915b5050505050905090565b6060600280546102f190610a76565b80601f016020809104026020016040519081016040528092919081815260200182805461031d90610a76565b801561036a5780601f1061033f5761010080835404028352916020019161036a565b820191906000526020600020905b81548152906001019060200180831161034d57829003601f168201915b5050505050905090565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610404576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103fb90610e5c565b60405180910390fd5b80600490816104139190610d18565b506001600560006101000a81548160ff02191690831515021790555050565b61043a6105e3565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036104a9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104a090610eee565b60405180910390fd5b6104b281610661565b50565b6060600180546104c490610a76565b80601f01602080910402602001604051908101604052809291908181526020018280546104f090610a76565b801561053d5780601f106105125761010080835404028352916020019161053d565b820191906000526020600020905b81548152906001019060200180831161052057829003601f168201915b5050505050905090565b6105df828260405160240161055d929190610f0e565b6040516020818303038152906040527f4b5c4277000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610725565b5050565b6105eb610746565b73ffffffffffffffffffffffffffffffffffffffff166106096101ca565b73ffffffffffffffffffffffffffffffffffffffff161461065f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161065690610f91565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60006a636f6e736f6c652e6c6f679050600080835160208501845afa505050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006107798261074e565b9050919050565b6107898161076e565b82525050565b60006020820190506107a46000830184610780565b92915050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610811826107c8565b810181811067ffffffffffffffff821117156108305761082f6107d9565b5b80604052505050565b60006108436107aa565b905061084f8282610808565b919050565b600067ffffffffffffffff82111561086f5761086e6107d9565b5b610878826107c8565b9050602081019050919050565b82818337600083830152505050565b60006108a76108a284610854565b610839565b9050828152602081018484840111156108c3576108c26107c3565b5b6108ce848285610885565b509392505050565b600082601f8301126108eb576108ea6107be565b5b81356108fb848260208601610894565b91505092915050565b60006020828403121561091a576109196107b4565b5b600082013567ffffffffffffffff811115610938576109376107b9565b5b610944848285016108d6565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561098757808201518184015260208101905061096c565b60008484015250505050565b600061099e8261094d565b6109a88185610958565b93506109b8818560208601610969565b6109c1816107c8565b840191505092915050565b600060208201905081810360008301526109e68184610993565b905092915050565b6109f78161076e565b8114610a0257600080fd5b50565b600081359050610a14816109ee565b92915050565b600060208284031215610a3057610a2f6107b4565b5b6000610a3e84828501610a05565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610a8e57607f821691505b602082108103610aa157610aa0610a47565b5b50919050565b60008190508160005260206000209050919050565b60008154610ac981610a76565b610ad38186610958565b94506001821660008114610aee5760018114610b0457610b37565b60ff198316865281151560200286019350610b37565b610b0d85610aa7565b60005b83811015610b2f57815481890152600182019150602081019050610b10565b808801955050505b50505092915050565b60006040820190508181036000830152610b5a8185610abc565b90508181036020830152610b6e8184610993565b90509392505050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302610bc47fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610b87565b610bce8683610b87565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000610c15610c10610c0b84610be6565b610bf0565b610be6565b9050919050565b6000819050919050565b610c2f83610bfa565b610c43610c3b82610c1c565b848454610b94565b825550505050565b600090565b610c58610c4b565b610c63818484610c26565b505050565b5b81811015610c8757610c7c600082610c50565b600181019050610c69565b5050565b601f821115610ccc57610c9d81610aa7565b610ca684610b77565b81016020851015610cb5578190505b610cc9610cc185610b77565b830182610c68565b50505b505050565b600082821c905092915050565b6000610cef60001984600802610cd1565b1980831691505092915050565b6000610d088383610cde565b9150826002028217905092915050565b610d218261094d565b67ffffffffffffffff811115610d3a57610d396107d9565b5b610d448254610a76565b610d4f828285610c8b565b600060209050601f831160018114610d825760008415610d70578287015190505b610d7a8582610cfc565b865550610de2565b601f198416610d9086610aa7565b60005b82811015610db857848901518255600182019150602085019450602081019050610d93565b86831015610dd55784890151610dd1601f891682610cde565b8355505b6001600288020188555050505b505050505050565b7f4f6e6c79207468652064657369676e61746564207369676e65722063616e206360008201527f6f6d706c6574652074686520636f6e7472616374000000000000000000000000602082015250565b6000610e46603483610958565b9150610e5182610dea565b604082019050919050565b60006020820190508181036000830152610e7581610e39565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000610ed8602683610958565b9150610ee382610e7c565b604082019050919050565b60006020820190508181036000830152610f0781610ecb565b9050919050565b60006040820190508181036000830152610f288185610993565b90508181036020830152610f3c8184610993565b90509392505050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000610f7b602083610958565b9150610f8682610f45565b602082019050919050565b60006020820190508181036000830152610faa81610f6e565b905091905056fea264697066735822122008be063f6cb3b9aed4aeb4b7cd6407c3db1da8f04fc16836171135a53a978c9864736f6c63430008110033",
  deployedLinkReferences: {},
};

export const CategoryNFT = {
  abi: [
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [],
      name: "EmptySources",
      type: "error",
    },
    {
      inputs: [],
      name: "TokenDoesNotExist",
      type: "error",
    },
    {
      inputs: [],
      name: "TransferNotAllowed",
      type: "error",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "previousAdmin",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "newAdmin",
          type: "address",
        },
      ],
      name: "AdminChanged",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "approved",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "operator",
          type: "address",
        },
        {
          indexed: false,
          internalType: "bool",
          name: "approved",
          type: "bool",
        },
      ],
      name: "ApprovalForAll",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "beacon",
          type: "address",
        },
      ],
      name: "BeaconUpgraded",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint8",
          name: "version",
          type: "uint8",
        },
      ],
      name: "Initialized",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "implementation",
          type: "address",
        },
      ],
      name: "Upgraded",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "addressToTokenId",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "pure",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "approve",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
      ],
      name: "balanceOf",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "exists",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "getApproved",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getImplementation",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "name",
          type: "string",
        },
        {
          internalType: "string",
          name: "symbol",
          type: "string",
        },
        {
          internalType: "string",
          name: "baseTokenURI",
          type: "string",
        },
        {
          internalType: "contract IAggregator",
          name: "aggregator",
          type: "address",
        },
        {
          internalType: "uint256[]",
          name: "sources",
          type: "uint256[]",
        },
      ],
      name: "initialize",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          internalType: "address",
          name: "operator",
          type: "address",
        },
      ],
      name: "isApprovedForAll",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "mint",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "name",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "ownerOf",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "proxiableUUID",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "safeTransferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes",
        },
      ],
      name: "safeTransferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "operator",
          type: "address",
        },
        {
          internalType: "bool",
          name: "approved",
          type: "bool",
        },
      ],
      name: "setApprovalForAll",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256[]",
          name: "sources",
          type: "uint256[]",
        },
      ],
      name: "setSources",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes4",
          name: "interfaceId",
          type: "bytes4",
        },
      ],
      name: "supportsInterface",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "symbol",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "tokenExists",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "tokenIdToAddress",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "pure",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "tokenURI",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "transferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "newImplementation",
          type: "address",
        },
      ],
      name: "upgradeTo",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "newImplementation",
          type: "address",
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes",
        },
      ],
      name: "upgradeToAndCall",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      name: "version",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "pure",
      type: "function",
    },
  ],
};
