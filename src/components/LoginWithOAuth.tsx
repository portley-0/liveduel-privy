import { useLoginWithOAuth } from "@privy-io/react-auth";

export default function LoginWithOAuth() {
  const { loading, initOAuth } = useLoginWithOAuth();

  const handleLogin = async () => {
    try {
      await initOAuth({ provider: "google", disableSignup: false });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-4 border rounded">
      <h3 className="font-bold mb-2">Google Login</h3>
      <button
        onClick={handleLogin}
        disabled={loading}
        className="px-4 py-2 bg-blue-600 text-white rounded w-full"
      >
        {loading ? "Logging in..." : "Log in with Google"}
      </button>
    </div>
  );
}
