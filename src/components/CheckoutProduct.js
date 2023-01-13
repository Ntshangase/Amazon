import React from 'react';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/solid';
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../slices/basketSlice';
import Currency from 'react-currency-formatter';

export default function CheckoutProduct({ id, title, price, rating, description, category, image, hasPrime }) {

    const dispatch = useDispatch();

    const addItemToBasket = () => {
        const product = {
            id,
            title,
            price,
            rating,
            description,
            category,
            image,
            hasPrime 
        };
            /**pushes item to redux */
        dispatch(addToBasket(product));
    };
    
    const removeItemFromBasket = () => {
        /**removes item from redux */
        dispatch(removeFromBasket({id}))
    }

    return (
        <div className='grid grid-cols-5 '>
            <Image src={image} height={200} width={200} objectFit="contain" />

            <div className='col-span-3 mx-5'>
                <p>{title}</p>
                <div className='flex'>
                    {Array(rating).fill().map((_, i) => (
                        <StarIcon key={i} className='h-5 text-yellow-500' />
                    ))}
                </div>
                <p className='text-xs my-2 line-clamp-3'>{description}</p>

                    <Currency quantity={price} currency="ZAR" />

                {hasPrime && (
                    <div className='flex items-center space-x-2'>
                        <img loading='lazy' className='w-12' src='https://links.papareact.com/fdw' alt='' />
                        <p className='text-xs text-gray-500' >Free Next-day Delivery</p>
                    </div>
                )}
            </div>

            <div className='flex flex-col space-y-2 my-2 justify-self-end'>
                <button onClick={addItemToBasket} className='button'>Add to Basket</button>
                <button onClick={removeItemFromBasket}  className='button'>Remove from Basket</button>
            </div>

        </div>
    )
}
