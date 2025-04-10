import { usePrivy } from "@privy-io/react-auth";
import LoginModal from "./components/LoginModal";

function App() {
  const { ready } = usePrivy();

  if (!ready) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full min-h-screen">
      <LoginModal />
    </div>
  );
}

export default App;
