import type { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import useBalance from "../hooks/useBalance";
import { parseBalance } from "../util";

export const Balance = () => {
  const { account } = useWeb3React<Web3Provider>();
  const { data } = useBalance(account);

  const maticBalance = parseBalance(data ?? 0);
  console.log('Your Matic Balance: ', maticBalance);
  return (
    <></>
    // <p>Balance: {parseBalance(data ?? 0)}</p>
  );
};
