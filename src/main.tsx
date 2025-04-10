import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/tailwind.css";
import { PrivyProvider } from "@privy-io/react-auth";
import { defineChain } from "viem";

const avalancheFuji = defineChain({
  id: 43113,
  name: "Avalanche Fuji",
  network: "avalanche-fuji",
  nativeCurrency: {
    decimals: 18,
    name: "Avalanche",
    symbol: "AVAX",
  },
  rpcUrls: {
    default: {
      http: ["https://api.avax-test.network/ext/bc/C/rpc"],
      webSocket: ["wss://api.avax-test.network/ext/bc/C/ws"],
    },
  },
  blockExplorers: {
    default: {
      name: "SnowTrace",
      url: "https://testnet.snowtrace.io",
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <PrivyProvider
      appId="cm935vklg01mhla0mlm1x4lf4"
      config={{
        defaultChain: avalancheFuji,
        supportedChains: [avalancheFuji],
        appearance: {
          theme: '#1E293C',
          showWalletLoginFirst: false,
          logo: "Liveduel-Logo.png",
          walletChainType: "ethereum-only",  
          walletList: [
            "detected_ethereum_wallets",
            "metamask",
            "rabby_wallet",
            "wallet_connect",
            "coinbase_wallet"
          ],
        },
        loginMethods: ["email", "google", "wallet"],
        fundingMethodConfig: {
          moonpay: {
            useSandbox: true,
          },
        },
        embeddedWallets: {
          requireUserPasswordOnCreate: false,
          showWalletUIs: true,
          ethereum: {
            createOnLogin: "users-without-wallets",
          },
        },
        mfa: {
          noPromptOnMfaRequired: false,
        },
      }}
    >
      <App />
    </PrivyProvider>
  </React.StrictMode>
);
