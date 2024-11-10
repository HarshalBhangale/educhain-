"use client";
import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { ethers } from "ethers";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import components and contract methods
import { getNimbusFinanceContract } from "@/lib/contract";
import TransactionTable from "@/components/TransactionTable";

const Dashboard = () => {
    const account = useAccount();
    const { isConnected, address } = account;

    // Create states for lend, borrow, vault, and leaderboard data
    const [lend, setLend] = useState("0.0");
    const [borrow, setBorrow] = useState("0.0");
    const [vaultAmount, setVaultAmount] = useState("0.0");
    const [balance, setBalance] = useState("");
    const [leaderboard, setLeaderboard] = useState([]);
    const [loading, setLoading] = useState(false);

    const getUserInfo = async () => {
        if (address && isConnected) {
            try {
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const contract = getNimbusFinanceContract(provider);
                const [etherBalance, nimbusBalance, borrowedAmount] = await contract.getUserInfo(address);

                setBalance(ethers.utils.formatEther(etherBalance));
                setLend(ethers.utils.formatEther(nimbusBalance));
                setBorrow(ethers.utils.formatEther(borrowedAmount));
            } catch (error) {
                console.error("Error getting user info:", error);
                toast.error("Error fetching user information");
            }
        } else {
            toast.error("Please connect your wallet");
        }
    };

    useEffect(() => {
        getUserInfo();
    }, [isConnected, address]);

    const handleJoinGame = (amount) => {
        // This would be a method to handle staking and joining the game with the specified amount
        toast.success(`You have joined a $${amount} game!`);
    };

    return (
        <div className="flex flex-col px-28 py-16">
            <ToastContainer />
            <div className="pb-5 text-[30px] font-bold ">Dashboard</div>

            {/* Game Cards */}
            <div className="grid grid-cols-3 gap-5 my-5">
                {[10, 20, 50].map((amount) => (
                    <div
                        key={amount}
                        className="card shadow-lg w-full bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl p-5 cursor-pointer hover:scale-105 transition-transform"
                        onClick={() => handleJoinGame(amount)}
                    >
                        <div className="card-body text-center text-white">
                            <h2 className="card-title text-2xl font-bold">Play & Earn</h2>
                            <p className="text-xl">Join the ${amount} game</p>
                            <p>Improve your skills and compete with others!</p>
                            <button className="mt-4 px-4 py-2 bg-white text-green-500 font-bold rounded-xl">
                                Join for ${amount}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Staking Information */}
            <div className="grid grid-cols-2 gap-5 my-5">
                <div className="card shadow-lg w-full bg-white rounded-3xl p-5">
                    <div className="card-body">
                        <h2 className="card-title">Your Balance</h2>
                        <div className="p-5">
                            {isConnected ? (
                                <div className="font-bold text-2xl text-gray-800">{balance} USC</div>
                            ) : (
                                <div className="text-gray-400">Connect your wallet to see balance</div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="card shadow-lg w-full bg-white rounded-3xl p-5">
                    <div className="card-body">
                        <h2 className="card-title">Your Vault</h2>
                        <div className="p-5">
                            {isConnected ? (
                                <div className="font-bold text-2xl text-gray-800">{vaultAmount} USC</div>
                            ) : (
                                <div className="text-gray-400">Connect your wallet to see vault</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Leaderboard Section */}
            <div className="card shadow-lg w-full bg-white rounded-3xl p-5 my-5">
                <div className="card-body">
                    <h2 className="card-title">Leaderboard</h2>
                    <div className="overflow-y-scroll h-56 p-5">
                        {loading ? (
                            <div>Loading...</div>
                        ) : leaderboard.length > 0 ? (
                            leaderboard.map((user, index) => (
                                <div
                                    key={user.address}
                                    className="flex justify-between items-center border-b border-gray-200 py-2"
                                >
                                    <span className="font-bold text-lg">{index + 1}. {user.name}</span>
                                    <span>{user.score} Points</span>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500">No players in leaderboard yet.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
