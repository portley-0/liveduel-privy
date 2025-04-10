import { usePrivy, useLogin } from "@privy-io/react-auth";

export default function LoginWithWallet() {
  const { ready, authenticated } = usePrivy();
  const { login } = useLogin();

  const disableLogin = !ready || authenticated;

  return (
    <div className="p-4 border rounded">
      <h3 className="font-bold mb-2">Wallet Login</h3>
      <button
        disabled={disableLogin}
        onClick={() =>
          login({
            loginMethods: ["wallet"],
            walletChainType: "ethereum-and-solana",
            disableSignup: false,
          })
        }
        className="px-4 py-2 bg-green-600 text-white rounded w-full"
      >
        Log in with Wallet
      </button>
    </div>
  );
}
