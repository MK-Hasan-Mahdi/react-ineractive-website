import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <h3>Shop Area</h3>
            {
                products.map(product => <Product
                    product={product}
                    key={product.id}
                ></Product>)
            }
        </div>
    );
};

export default Shop;