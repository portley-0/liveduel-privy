import { usePrivy, useLogin } from "@privy-io/react-auth";

export function useWalletLogin() {
  const { ready, authenticated } = usePrivy();
  const { login } = useLogin();

  const walletLogin = () => {
    if (!ready || authenticated) return;
    login({
      loginMethods: ["wallet"],
      walletChainType: "ethereum-only",
      disableSignup: false,
    });
  };

  return { walletLogin };
}
