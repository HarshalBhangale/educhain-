import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'
import AssetsTable from '@/components/assets';

export default function Home() {
  return (
    <main className="justify-between p-32">
      <div className="hero-content text-black text-center">
        <div className="flex flex-col w-max">
          <div className="mb-5 text-5xl font-serif font-bold">Hey 👋, Welcome To Nimbus Fi
          </div>
          <div className="mb-5 text-xl">
            A DeFi enabling people to liquid stake, lend/borrow and invest into yeild vaults on <b>EDU Chain</b>.
          </div>
          <div className='py-5'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-xl ">
                <Link
                  href="/loan?state=lend">
                  <div className="bg-white p-6 rounded-xl ">
                    <h2 className="text-2xl font-semibold mb-4">For Stakers</h2>
                    <p>Just liquid stake your EDU tokens and get onchain yields and platform rewards.</p>
                  </div>
                </Link>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-xl ">
                <Link
                  href="/loan?state=borrow">
                  <div className="bg-white p-6 rounded-xl ">
                    <h2 className="text-2xl font-semibold mb-4">For Yielders</h2>
                    <p>Simple, Easy, Effective - Yield vaults of USDC which gives you upto <b>60% APY</b></p>
                  </div>
                </Link>
              </div>
            </div>

          </div>
          <div className='py-5'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-xl ">
                <Link
                  href="/loan?state=lend">
                  <div className="bg-white p-6 rounded-xl ">
                    <h2 className="text-2xl font-semibold mb-4">For Lenders</h2>
                    <p>Earn competitive interest rates by providing liquidity to the community.</p>
                  </div>
                </Link>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-xl ">
                <Link
                  href="/loan?state=borrow">
                  <div className="bg-white p-6 rounded-xl ">
                    <h2 className="text-2xl font-semibold mb-4">For Borrowers</h2>
                    <p>Access loans backed by cryptocurrency assets at favorable rates.</p>
                  </div>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between px-28 py-16">
        <AssetsTable />
      </div>
    </main>
  )
}
