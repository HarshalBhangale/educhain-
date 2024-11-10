"use client";
import React, { useState, useEffect } from 'react';
import { useAccount } from 'wagmi'
import { ethers } from 'ethers';
import { NIMBUS_TOKEN_ADDRESS } from '@/lib/contract';
import NimbusABI from '@/lib/abi/NimbusToken.json';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Faucet: React.FC = () => {
    const account = useAccount()
    const address = account.address;

    const [loading, setLoading] = useState(false);

    const getTokenContract = () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        if (!provider) throw new Error("No Web3 Provider");
        return new ethers.Contract(NIMBUS_TOKEN_ADDRESS, NimbusABI.abi, provider.getSigner());
    };

    const executeProposal = async () => {
        setLoading(true);
        try {
            const contract = getTokenContract();
            const tx = await contract.faucet();
            console.log("Transaction sent:", tx.hash);
            const receipt = await tx.wait();
            console.log("Transaction confirmed:", receipt);
            toast.success("Proposal Executed Successfully!");

            toast(
                <div>
                    Link - {`https://opencampus-codex.blockscout.com/tx/${tx.hash}`}
                </div>
            );
        } catch (error) {
            console.error("Error:", error);
            toast.error("Failed to get tokens!");

            toast(
                <div>
                    {(error as any)?.reason || "Unknown error occurred"}
                </div>
            );
        } finally {
            setLoading(false);
        }
    };

    if (!account.isConnected) {
        return (
            <div className="flex items-center align-middle min-h-screen text-center justify-center text-4xl font-bold">
                <div>
                    Please connect your wallet.
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-32 py-16">
            <h1 className="text-3xl font-bold mb-6">Faucet</h1>

            <div className="bg-white p-6 rounded-xl shadow-xl ">
                <div className="bg-white p-6 rounded-xl ">
                    <h2 className="text-2xl font-semibold mb-4">Get 10 NIBS token for testing</h2>
                    <button className='bg-black py-4 px-6 text-white font-bold rounded-md' onClick={executeProposal}> Get Token</button>
                </div>
            </div>

            <ToastContainer position="top-right" autoClose={5000} />
        </div >
    );
};

export default Faucet;