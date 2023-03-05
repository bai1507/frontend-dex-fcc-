import { abis } from "@my-app/contracts"
import { ethers } from "ethers";
export const getPairInfo = async(pairAddress,provider) =>{
    const pairsInfo = [];
    const pairABI = abis.pair
    const tokenABI = abis.erc20.abi
    for (let i = 0; i < pairAddress.length; i++) {
        const pairAddr = pairAddress[i]
        const pair =  new ethers.Contract(pairAddr, pairABI, provider)

        const token0Address = await pair.token0()
        const token1Address = await pair.token1()

        const token0Contract = new ethers.Contract(token0Address, tokenABI, provider)
        const token1Contract = new ethers.Contract(token1Address, tokenABI, provider)

        const token0Name = await token0Contract.name()
        const token1Name = await token1Contract.name()

        pairsInfo.push({
            address:pairAddr,
            token0Address,
            token1Address,
            token0Name,
            token1Name
        })

    }
    return pairsInfo
}
