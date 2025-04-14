import { usePrivy, useLogin } from "@privy-io/react-auth";

export function useWalletLogin() {
  const { ready } = usePrivy();
  const { login } = useLogin();

  const walletLogin = () => {
    if (!ready ) return;
    login({
      loginMethods: ["wallet"],
      walletChainType: "ethereum-only",
      disableSignup: false,
    });
  };

  return { walletLogin };
}
