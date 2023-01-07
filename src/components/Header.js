import React from 'react';
import Image from 'next/image'

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
            <div>
                <input type="text" />
            </div>
        </div>
        {/* Bottom Nav */}
        <div>
            <h2>TESTING</h2>
        </div>
    </header>
  )
}
