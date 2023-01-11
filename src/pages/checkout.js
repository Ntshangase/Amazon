import React from 'react'
import Header from '../components/Header';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { selectItems, selectTotal } from '../slices/basketSlice';
import CheckoutProduct from '../components/CheckoutProduct';
import { useSession } from 'next-auth/react';
import Currency from 'react-currency-formatter';

export default function checkout() {
    const items = useSelector(selectItems);
    const { data: session } = useSession();
    const total = useSelector(selectTotal);

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
                                rating={item.rating}
                                description={item.description}
                                category={item.category}
                                image={item.image}
                                hasPrime={item.hasPrime}
                            />
                        ))}
                    </div>
                </div>

                {/**Right-side */}
                <div className='flex flex-col bg-white p-10 shadow-md'>
                    {items.length > 0 && (
                        <>
                            <h2>Subtotal ({items.length} items): {" "}
                                <span className='font-bold'>
                                    <Currency quantity={total} currency='ZAR' />
                                </span>
                            </h2>

                            <button disabled={!session} className={`button mt-2 ${!session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}`} >
                                {!session ? "sign in to checkout" : ' checkout'}
                            </button>

                        </>
                    )
                    }
                </div>

            </main>

        </div>
    )
}
