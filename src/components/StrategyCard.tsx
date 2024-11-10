import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usdcToken, cbEthToken, wbtcToken, aeroToken } from '@/lib/chainData';


interface StrategyProps {
    name: string;
    description: string;
    apy: string;
    backgroundColor: string;
    tokens: {
        name: string;
        logo_url: string;
    }[];
    link: string;
}



const Strategy: React.FC<StrategyProps> = ({ name, description, apy, backgroundColor, tokens, link }) => (
    <div className={`rounded-lg p-6 mb-4 bg-gray-100 text-black hover:bg-yellow-200`}>
        <Link href={link}>
            <div className="flex justify-between items-start">
                <div>
                    <h2 className="text-2xl font-bold mb-2">{name}</h2>
                    <p className="text-sm mb-4">{description}</p>
                    <div className="flex space-x-2">
                        {tokens.map((token, index) => (
                            <div key={index} className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                                <Image src={token?.logo_url} alt={token?.name} width={32} height={32} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="text-right">
                    <p className="text-sm mb-1">APY</p>
                    <p className="text-4xl font-bold">{apy}</p>
                </div>
            </div>
        </Link>
    </div>
);

const DeFiStrategies: React.FC = () => {
    const strategies: StrategyProps[] = [
        {
            name: "Prime USDC",
            description: "Deposit USDC into 'Prime USDC' for optimized yield across multiple DeFi protocols. This smart contract leverages Aave for lending and borrowing, Aerodrome for liquidity provision, and Uniswap for swaps, using Pyth Network for price feeds. It supplies USDC to Aave, borrows cbETH, then provides USDC-AERO liquidity on Aerodrome. Your stake is represented by ERC4626 shares for easy deposits and withdrawals. The contract periodically harvests gains, reinvests rewards, and rebalances positions. This strategy aims to maximize USDC yield through lending-borrowing differentials, liquidity fees, and market inefficiencies, while managing risks across diversified DeFi positions.",
            apy: "58.06%",
            backgroundColor: "bg-purple-500",
            tokens: [usdcToken, cbEthToken, aeroToken],
            link: "./vaults/prime",
        },
        {
            name: "Looptimism",
            description: "Deposit your USDC into Looptimism to leverage automated yield optimization across multiple DeFi protocols. This smart contract strategy supplies your USDC to Aave, borrows WBTC against it, then swaps the WBTC back to USDC via Uniswap, repeating this process to increase leverage. It uses Pyth for real-time price feeds to maintain a safe loan-to-value ratio. Your stake is represented by ERC4626 standard shares, allowing for easy deposits and withdrawals. The contract owner can periodically harvest gains to realize yields. This approach aims to maximize your USDC returns by capitalizing on lending-borrowing differentials and potential market inefficiencies, all while managing associated risks through automated processes.",
            apy: "8.73%",
            backgroundColor: "bg-blue-100",
            tokens: [usdcToken, wbtcToken],
            link: "./vaults/looptimism"

        },
    ];

    return (
        <div className="container mx-auto p-10">
            {strategies.map((strategy, index) => (
                <Strategy key={index} {...strategy} />
            ))}
        </div>
    );
};

export default DeFiStrategies;