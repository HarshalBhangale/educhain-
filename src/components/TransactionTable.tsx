import React from 'react';
import { ethers } from 'ethers';

interface Transaction {
    transactionHash: string;
    type: string;
    blockNumber: number;
    previousOwner?: string;
    newOwner?: string;
    member?: string;
    amount?: {
        type: string;
        hex: string;
    };
    isNimbus?: boolean;
}

interface TransactionTableProps {
    transactions: Transaction[];
}

const TransactionTable: React.FC<TransactionTableProps> = ({ transactions }) => {
    const formatAmount = (amount: Transaction['amount']): string => {
        if (amount && amount.type === "BigNumber") {
            return ethers.utils.formatUnits(amount.hex, 18);
        }
        return "N/A";
    };

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">Transaction Hash</th>
                        <th scope="col" className="px-6 py-3">Type</th>
                        <th scope="col" className="px-6 py-3">Data</th>
                        <th scope="col" className="px-6 py-3">Block Number</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions?.map((tx, index) => (
                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {tx.transactionHash.substring(0, 10)}...
                            </th>
                            <td className="px-6 py-4">
                                {tx.type}
                            </td>
                            <td className="px-6 py-4">
                                {tx.type === "OwnershipTransferred" && tx.previousOwner && tx.newOwner && (
                                    <>
                                        Previous Owner: {tx.previousOwner.substring(0, 10)}...<br />
                                        New Owner: {tx.newOwner.substring(0, 10)}...
                                    </>
                                )}
                                {tx.type === "MemberJoined" && tx.member && (
                                    <>Member: {tx.member.substring(0, 10)}...</>
                                )}
                                {tx.type === "Lended" && tx.member && tx.amount && (
                                    <>
                                        Member: {tx.member.substring(0, 10)}...<br />
                                        Amount: {formatAmount(tx.amount)} {tx.isNimbus ? "Nimbus" : "Collateral"}
                                    </>
                                )}
                            </td>
                            <td className="px-6 py-4">
                                {tx.blockNumber}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TransactionTable;