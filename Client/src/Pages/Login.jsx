import React, { useState, useContext } from "react";
import { TransactionContext } from "../Context/TransactionContext";
import { shortenAddress } from "../Utils/shortenAddress";
import { Link } from "react-router-dom";

const Login = () => {
  const { currentAccount, connectWallet } = useContext(TransactionContext);
  const [isConnecting, setIsConnecting] = useState(false); 

  const handleConnectWallet = async () => {
    if (isConnecting) return; 
    setIsConnecting(true);
    try {
      await connectWallet(); 
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
    setIsConnecting(false); 
  };

  return (
    <div className="min-h-screen gradient-bg-welcome flex justify-center items-center px-6">
      <div className="w-full max-w-md bg-transparent backdrop-blur-md p-8 rounded-2xl shadow-xl text-white text-center border border-gray-500/30">
        <h1 className="text-4xl font-semibold mb-6 text-gradient">Wallet Login</h1>

        {currentAccount ? (
          <div className="bg-white text-gray-800 py-6 px-4 rounded-xl shadow-md">
            <p className="text-lg">Connected Wallet:</p>
            <p className="font-bold text-xl mt-2">
              {shortenAddress(currentAccount)}
            </p>
          </div>
        ) : (
          <button
            onClick={handleConnectWallet}
            className="bg-[#2952e3] hover:bg-[#2546bd] text-white font-medium px-6 py-3 rounded-full transition mt-5"
            disabled={isConnecting} // Disable the button while connecting
          >
            {isConnecting ? "Connecting..." : "Connect Wallet"}
          </button>
        )}

        <Link to="/" className="mt-8 inline-block">
          <button className="mt-6 text-sm bg-white/20 hover:bg-white/30 px-5 py-2 rounded-full text-white">
            ← Back to Welcome
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
