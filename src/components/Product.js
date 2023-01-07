import React, { useState } from 'react';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/solid';

const MAX_RATING = 5;
const MIN_RATING = 1;

export default function Product({ id, tittle, price, description, category, image }) {
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1) ) + MIN_RATING
    );
    return (
        <div>
            <p>{category} </p>
            <Image src={image} height={200} width={200} objectFit='contain' />
            <h4>{tittle}</h4>
            <div className='flex'>
                {Array(rating).fill().map((_, i) => (
                    <StarIcon className='h-5' />
                ))}
            </div>
        </div>
    )
}