import { useConfig } from "@usedapp/core";
import { useEffect, useState } from "react";
import { ROUTER_ADDRESS } from "../config";
import { ethers } from "ethers";
import { getFactoryInfo,getRouterInfo } from "../utils";

export const loadPools = async (providerUrl) => {
    const provider = new ethers.providers.JsonRpcProvider(providerUrl)
    const routerInfo = await getRouterInfo(ROUTER_ADDRESS,provider)
    const factoryInfo = await getFactoryInfo(routerInfo.factory,provider)
    console.log(factoryInfo)
    return factoryInfo.pairsInfo
};

export const usePools = () => {
  const { readOnlyChainId, readOnlyUrls } = useConfig();
  const [loading, setLoading] = useState(true);
  const [pools, setPools] = useState({});

  useEffect(() => {
    loadPools(readOnlyUrls[readOnlyChainId]).then((pools) => {
      setPools(pools); 
      setLoading(false)
    });
  }, [readOnlyChainId, readOnlyUrls]);

  return [loading, pools];
};
