import { Contract } from "ethers";
import {
  EXCHANGE_CONTRACT_ABI,
  EXCHANGE_CONTRACT_ADDRESS,
  TOKEN_CONTRACT_ABI,
  TOKEN_CONTRACT_ADDRESS,
} from "../constants";

export const getEtherBalance = async (provider, address, contract = false) => {
    try {
        if (contract) {
            const balance = await provider.getBalance(EXCHANGE_CONTRACT_ADDRESS);
        }
        else {
            const balance = await provider.getBalance(address);
        }
        return balance;
    }
}