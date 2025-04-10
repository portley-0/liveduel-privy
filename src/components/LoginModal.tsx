import LoginWithEmail from "../components/LoginWithEmail.tsx";
import LoginWithWallet from "../components/LoginWithWallet.tsx";
import LoginWithOAuth from "../components/LoginWithOAuth.tsx";

export default function LoginModal() {
  return (
    <div className="max-w-md mx-auto p-6 bg-[#1B2536] rounded shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Welcome to Liveduel</h2>
      <div className="space-y-4">
        <LoginWithOAuth />
        <LoginWithEmail />
        <LoginWithWallet />
      </div>
    </div>
  );
}
