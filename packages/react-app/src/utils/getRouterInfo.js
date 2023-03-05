import { abis } from "@my-app/contracts";
import { ethers } from "ethers";

export const getRouterInfo = async (routerAddress, provider) => {
  const router = new ethers.Contract(routerAddress, abis.router02, provider);

  return {
    factory: await router.factory(),
  };
};
