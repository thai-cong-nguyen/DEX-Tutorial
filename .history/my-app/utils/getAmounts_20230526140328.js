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
    } else {
      const balance = await provider.getBalance(address);
    }
    return balance;
  } catch (error) {
    console.error(error);
    return 0;
  }
};

export const getCDTokensBalance = async (provider, address) => {
  try {
    const tokenContract = new Contract(
      TOKEN_CONTRACT_ADDRESS,
      TOKEN_CONTRACT_ABI,
      provider
    );
    const balanceOfCryptoDevToken = await tokenContract.balanceOf(address);
    return balanceOfCryptoDevToken;
  } catch (error) {
    console.error(error);
  }
};

export const getLPTokensBalance = async (provider, address) => {
  const exchangeContract = new Contract(
    EXCHANGE_CONTRACT_ADDRESS,
    EXCHANGE_CONTRACT_ABI,
    provider
  );
};
