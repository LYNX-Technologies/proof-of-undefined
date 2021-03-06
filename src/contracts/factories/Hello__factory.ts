/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Hello, HelloInterface } from "../Hello";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "donate",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506101b8806100606000396000f3fe60806040526004361061001e5760003560e01c8063ed88c68e14610023575b600080fd5b61002b61002d565b005b655af3107a4000341015610076576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161006d90610102565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f193505050501580156100dc573d6000803e3d6000fd5b50565b60006100ec602183610122565b91506100f782610133565b604082019050919050565b6000602082019050818103600083015261011b816100df565b9050919050565b600082825260208201905092915050565b7f4e65656420746f20706179207570206174206c656173742031302046696e6e6560008201527f790000000000000000000000000000000000000000000000000000000000000060208201525056fea264697066735822122002d689f1514d90795532f27b2862d91e51fe816c0036849ea2e3f90d56e724e664736f6c63430008040033";

export class Hello__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Hello> {
    return super.deploy(overrides || {}) as Promise<Hello>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Hello {
    return super.attach(address) as Hello;
  }
  connect(signer: Signer): Hello__factory {
    return super.connect(signer) as Hello__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HelloInterface {
    return new utils.Interface(_abi) as HelloInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Hello {
    return new Contract(address, _abi, signerOrProvider) as Hello;
  }
}
