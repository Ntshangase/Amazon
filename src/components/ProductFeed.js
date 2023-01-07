import React from 'react'
import Product from './Product';

export default function ProductFeed({ products }) {
    return (
        <div>
            <h1>ProductFeed...</h1>
            {products.map(({ id, tittle, price, description, category, image }) => (
                <Product
                    key={id}
                    id={id}
                    tittle={tittle}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                />
            ))}
        </div>
    );
}
