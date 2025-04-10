import { useState } from "react";
import { useLoginWithEmail } from "@privy-io/react-auth";

export default function LoginWithEmail() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const { sendCode, loginWithCode } = useLoginWithEmail();

  return (
    <div className="p-4 border rounded">
      <h3 className="font-bold mb-2">Email Login</h3>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
        className="p-2 border rounded w-full mb-2"
      />
      <button
        onClick={() => sendCode({ email })}
        className="px-4 py-2 bg-purple-600 text-white rounded w-full mb-2"
      >
        Send Code
      </button>
      <input
        type="text"
        placeholder="Enter OTP code"
        value={code}
        onChange={(e) => setCode(e.currentTarget.value)}
        className="p-2 border rounded w-full mb-2"
      />
      <button
        onClick={() => loginWithCode({ code })}
        className="px-4 py-2 bg-purple-800 text-white rounded w-full"
      >
        Login
      </button>
    </div>
  );
}
