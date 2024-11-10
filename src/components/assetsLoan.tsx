"use client"
import React from 'react'
import { CiDollar } from "react-icons/ci";
import { useRouter } from "next/navigation";

const AssetsLoanTable = () => {
    const router = useRouter();
    const [isConnected, setIsConnected] = React.useState(false)

    return (
        <div>
            <div className="text-[30px] font-bold pb-5 text-center">Assets</div>
            <div className="py-4 w-[300px]">
                {/* creating token cards */}
                <div className="card w-full my-5 bg-gray-100 shadow-xl">
                    <div className="flex p-5 justify-between items-center">
                        <div className="flex flex-row items-center gap-2">
                            <CiDollar className="bg-yellow-300 rounded-xl text-xl" />
                            <h2 className="text-left text-lg font-semibold ">EDU</h2>
                        </div>{" "}
                        <div className="flex flex-row gap-4">
                            <div className="flex items-center justify-center">
                                <div className="w-px h-12 bg-green-300"></div>
                                <div className="flex flex-col px-2">
                                    <div> 2 %</div>
                                    <div className="text-xs">APY</div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="w-px h-12 bg-green-300"></div>
                                <div className="flex flex-col px-2">
                                    <div> 100000</div>
                                    <div className="text-xs">Pool</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card w-full my-5 bg-gray-100 shadow-xl">
                    <div className="flex p-5 justify-between items-center">
                        <div className="flex flex-row items-center gap-2">
                            <CiDollar className="bg-yellow-300 rounded-xl text-xl" />
                            <h2 className="text-left text-lg font-semibold ">NIBS</h2>
                        </div>{" "}
                        <div className="flex flex-row gap-4">
                            <div className="flex items-center justify-center">
                                <div className="w-px h-12 bg-green-300"></div>
                                <div className="flex flex-col px-2">
                                    <div> 3 %</div>
                                    <div className="text-xs">APY</div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="w-px h-12 bg-green-300"></div>
                                <div className="flex flex-col px-2">
                                    <div> 10000</div>
                                    <div className="text-xs">Pool</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card w-full my-5 bg-gray-100 shadow-xl">
                    <div className="flex p-5 justify-between items-center">
                        <div className="flex flex-row items-center gap-2">
                            <CiDollar className="bg-yellow-300 rounded-xl text-xl" />
                            <h2 className="text-left text-lg font-semibold ">ETH</h2>
                        </div>{" "}
                        <div className="flex flex-row gap-4">
                            <div className="flex items-center justify-center">
                                <div className="w-px h-12 bg-green-300"></div>
                                <div className="flex flex-col px-2">
                                    <div> 4 %</div>
                                    <div className="text-xs">APY</div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="w-px h-12 bg-green-300"></div>
                                <div className="flex flex-col px-2">
                                    <div> 100000</div>
                                    <div className="text-xs">Pool</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card w-full my-5 bg-gray-100 shadow-xl">
                    <div className="flex p-5 justify-between items-center">
                        <div className="flex flex-row items-center gap-2">
                            <CiDollar className="bg-yellow-300 rounded-xl text-xl" />
                            <h2 className="text-left text-lg font-semibold ">USDC</h2>
                        </div>{" "}
                        <div className="flex flex-row gap-4">
                            <div className="flex items-center justify-center">
                                <div className="w-px h-12 bg-green-300"></div>
                                <div className="flex flex-col px-2">
                                    <div> 0.1 %</div>
                                    <div className="text-xs">APY</div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="w-px h-12 bg-green-300"></div>
                                <div className="flex flex-col px-2">
                                    <div> 100000</div>
                                    <div className="text-xs">Pool</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default AssetsLoanTable;