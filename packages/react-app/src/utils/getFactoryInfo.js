import { abis } from "@my-app/contracts"
import { ethers } from "ethers";
import { getPairInfo } from "./getPairInfo";
export const getFactoryInfo = async(factoryAddress,provider) =>{
    const factory = new ethers.Contract(factoryAddress, abis.factory, provider)
    
    const fee = await factory.feeTo()
    const feeToSetter = await factory.feeToSetter()
    const allPairsLength = await factory.allPairsLength()
    let allPairs = []
    for (let i = 0; i < allPairsLength; i++) {
        allPairs[i] = await factory.allPairs(i)
    }
    const pairsInfo = await getPairInfo(allPairs,provider)

    const factoryInfo = {
        fee:fee,
        feeToSetter:feeToSetter,
        allPairsLength:allPairsLength,
        allPairs:allPairs,
        pairsInfo:pairsInfo
    }
    return factoryInfo
}