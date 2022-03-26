import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    // const [laptop, setLaptop] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        // console.log('I am clicked button');
        const selectedProduct = [...cart, product];
        setCart(selectedProduct);
    }

    const handleChooseOne = () => {
        console.log('choose one randomly');
    }

    return (
        <div className='shop-container container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h3>Products Cart</h3>
                {
                    cart.map(item => <Cart
                        key={item.id}
                        item={item.name}
                    ></Cart>)
                }
                <button onClick={() => handleChooseOne()}>Choose One:</button>
            </div>
        </div>
    );
};

export default Shop;