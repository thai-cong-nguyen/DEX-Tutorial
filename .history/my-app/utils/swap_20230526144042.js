import { Contract } from "ethers";
import {
  EXCHANGE_CONTRACT_ADDRESS,
  EXCHANGE_CONTRACT_ABI,
  TOKEN_CONTRACT_ADDRESS,
  TOKEN_CONTRACT_ABI,
} from "../constants";

export const getAmountOfTokensReceivedFromSwap = async (
  _swapAmountWei,
  provider,
  ethSelected,
  ethBalance,
  reservedCD
) => {
  const exchangeContract = new Contract(
    EXCHANGE_CONTRACT_ADDRESS,
    EXCHANGE_CONTRACT_ABI,
    provider
  );
  let amountOfTokens;
  if (ethSelected)
    [
      (amountOfTokens = await exchangeContract.getAmountOfTokens(
        _swapAmountWei,
        ethBalance
      )),
    ];
};
