"use client";
import React, { useState } from 'react'

export default function Votelist() {
    const [votes, setVotes] = useState([
        { id: 1, collateral: 'EDU', status: 'active', debtCeiling: '1M', utilization: '50%', apy: '2%', bribes: '10 ETH', voteCount: 100, badDebt: 0 },
        { id: 2, collateral: 'ETH', status: 'active', debtCeiling: '2M', utilization: '75%', apy: '4%', bribes: '5 ETH', voteCount: 50, badDebt: 0 },
        {
            id: 3,
            collateral: 'USDC',
            status: 'inactive',
            debtCeiling: '1M',
            utilization: '25%',
            apy: '1%',
            bribes: '2 ETH',
            voteCount: 20,
            badDebt: 1378,
        },
    ])

    const handleVote = (id: number) => {
        // Handle voting for a proposal
    }

    return (
        <div className="p-6">
            <div className="card bg-base-100 shadow-md p-4">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Collateral</th>
                            <th>Status</th>
                            <th>Debt Ceiling / Utilization</th>
                            <th>APY</th>
                            <th>Bribes</th>
                            <th>Votes</th>
                            <th>Vote</th>
                        </tr>
                    </thead>
                    <tbody>
                        {votes.map((vote) => (
                            <tr key={vote.id}>
                                <td>{vote.collateral}</td>
                                <td>
                                    {vote.status === 'active' ? (
                                        <span className="badge badge-success">Active</span>
                                    ) : (
                                        <div>
                                            <span className="badge badge-error">Bad Debt</span>
                                            <p>{vote.badDebt} N</p>
                                        </div>
                                    )}
                                </td>
                                <td>
                                    {vote.debtCeiling} / {vote.utilization}
                                </td>
                                <td>{vote.apy}</td>
                                <td>{vote.bribes}</td>
                                <td>{vote.voteCount}</td>
                                <td>
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => handleVote(vote.id)}
                                    >
                                        Vote
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
