import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x390eF8A23c8EeB1B9c3Fa4A270f2767Bdf5a3e86"; 
//export const ROUTER_ADDRESS = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"
export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/jD79JfYdfkeTS0ESVVMpcr8VyktwAoVM",
  },
};