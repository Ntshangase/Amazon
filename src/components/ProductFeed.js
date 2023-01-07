import React from 'react'
import Product from './Product';

export default function ProductFeed({ products }) {
    return (
        <div>
            <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto'>
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
        </div>
    );
}
