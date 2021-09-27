import MetaMaskOnboarding from "@metamask/onboarding";
import { useWeb3React } from "@web3-react/core";
import { UserRejectedRequestError } from "@web3-react/injected-connector";
import { Contract, ethers } from "ethers";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { injected } from "../connectors";
import useENSName from "../hooks/useENSName";
import { formatPolygonScanLink, shortenHex } from "../util";
import Abi from '../abis/PlayBirdMansion.json'

interface AccountProps {
  triedToEagerConnect: boolean
};

export const Account: React.FC<AccountProps> = ({ triedToEagerConnect }) => {
  const {
    active,
    error,
    activate,
    chainId,
    account,
    setError,
  } = useWeb3React();

  // initialize metamask onboarding
  const onboarding = useRef<MetaMaskOnboarding>();

  useLayoutEffect(() => {
    onboarding.current = new MetaMaskOnboarding();
  }, []);

  // manage connecting state for injected connector
  const [connecting, setConnecting] = useState(false);
  useEffect(() => {
    if (active || error) {
      setConnecting(false);
      onboarding.current?.stopOnboarding();
    }
  }, [active, error]);

  const contractAddress = Abi.networks[137].address
  const contract = new ethers.Contract(contractAddress, Abi.abi);
  // console.log(ethers.getDefaultProvider())
  // console.log(contract.totalSupply())
  let xx
  contract.totalSupply().then((res, err) => {
    xx = res;
    console.log(xx)
  }).catch()

  if (error) {
    return null;
  }

  if (!triedToEagerConnect) {
    return null;
  }

  if (typeof account !== "string") {
    const hasMetaMaskOrWeb3Available =
      MetaMaskOnboarding.isMetaMaskInstalled() ||
      (window as any)?.ethereum ||
      (window as any)?.web3;

    return (
      <div className=''>
        {hasMetaMaskOrWeb3Available ? (
          <button className='border-2 px-4 py-2 rounded-lg border-gray-300 hover:border-white hover:bg-white hover:bg-opacity-20'
            onClick={() => {
              setConnecting(true);
              activate(injected, undefined, true).catch((error) => {
                // ignore the error if it's a user rejected request
                if (error instanceof UserRejectedRequestError) {
                  setConnecting(false);
                } else {
                  setError(error);
                }
              });
            }}
          >
            {MetaMaskOnboarding.isMetaMaskInstalled()
              ? "Connect to MetaMask"
              : "Connect to Wallet"}
          </button>
        ) : (
          <button className='border-2 px-4 py-2 rounded-lg border-gray-300 hover:border-white hover:bg-white hover:bg-opacity-20'
            onClick={() => onboarding.current?.startOnboarding()}>
            Install Metamask
          </button>
        )}
      </div>
    );
  }

  return (
    <>
      {chainId !== 137 ? <div className='text-[.8rem]'>Connect to Polygon Network</div> :
        <div className='cursor-default border-2 px-4 py-2 rounded-lg border-gray-300 hover:border-white hover:bg-white hover:bg-opacity-20'>
          {`${shortenHex(account, 4)}`}
        </div>
      }
    </>
  );
};
