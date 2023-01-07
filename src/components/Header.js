import React from 'react';
import Image from 'next/image';
import {SearchIcon, ShoppingCartIcon} from '@heroicons/react/outline';

export default function Header() {
  return (
    <header>
        {/* Top Nav*/}
        <div className='flex items-center bg-amazon_blue p-1 flex-grow py-2'>
            <div className='mt-2 flex items-center flex-grow sm:flex-grow-0' >
                <Image
                src="https://links.papareact.com/f90"
                width={150}
                height={40} 
                objectFit="contain"
                className="cursor-pointer"
                />
            </div>
            {/*Search bar */}
            <div className='hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hoover-bg-yellow-500'>
                <input className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4' type="text" />
                <SearchIcon className='h-12 p-4' />
            </div>
            {/*Right side */}
            <div className=' text-white flex items-center text-xs space-x-6 whitespace-nowrap'>
                <div>
                    <p>Hello Ntshangase</p>
                    <p>Account & Lists</p>
                </div>
                <div>
                    <p>Returns</p>
                    <p>Orders</p>
                </div>
                <div> 
                    <ShoppingCartIcon className='h-10' />
                    <p>Basket</p>
                </div>
            </div>
        </div>
        {/* Bottom Nav */}
        <div>
            <h2>TESTING</h2>
        </div>
    </header>
  )
}
