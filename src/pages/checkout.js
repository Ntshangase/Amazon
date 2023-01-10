import React from 'react'
import Header from '../components/Header';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';
import CheckoutProduct from '../components/CheckoutProduct';
import { useSession } from 'next-auth/react';

export default function checkout() {
    const items = useSelector(selectItems);
    const { data: session } = useSession()

    return (
        <div className='bg-gray-100'>
            <Header />

            <main className='lg:flex max-w-screen-2xl mx-auto'>
                {/**Left */}
                <div className='flex-grow m-5 shadow-sm'>
                    <Image src="https://links.papareact.com/ikj"
                        width={1020}
                        height={250}
                        objectFit="contain"
                    />
                    <div className='flex flex-col p-5 space-y-10 bg-white'>
                        <h1 className='text-3xl border-b bp-4'>
                            {items.length === 0 ? 'Your Basket is Empty.' : 'Your Shopping Basket'}
                        </h1>

                        {items.map((item, i) => (
                            <CheckoutProduct 
                            key={i}
                            id={item.id}
                            tittle={item.tittle}
                            price={item.price}
                            description={item.description}
                            category={item.category}
                            image={item.image}
                            hasPrime={item.hasPrime}
                             />
                        ))}
                    </div>
                </div>

                {/**Right-side */}
                <div> 
                    {items.length > 0 && (
                        <div>
                            <h2>Subtotal ({items.length}):
                            <span className='font-bold'></span> 
                            </h2>

                            <button>
                                {!session ? "sign in to checkout"  : ' checkout' }
                            </button>
                        </div>
                    )
                    }
                </div>

            </main>

        </div>
    )
}
