import React from 'react';
import Image from 'next/image'

export default function Product({ id, tittle, price, description, category, image }) {
  return (
    <div>
        <p>{category} </p>
        <Image src={image} height={200} width={200} objectFit='contain' />
    </div>
  )
}