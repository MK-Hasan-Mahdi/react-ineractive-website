import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import RandomItem from './RandomItem/RandomItem';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [randomItem, setRandomItem] = useState([]);
    // console.log(typeof cart);
    // console.log(cart.length);
    const randomNumber = Math.floor(Math.random() * 4 + 1)
    const randomFunc = (cart, randomNumber) => {
        const randomValue = (cart[randomNumber]);
        setRandomItem(randomValue);
        // console.log(cart, randomNumber);
    }
    // console.log(randomItem);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        const selectedProduct = [...cart, product];
        setCart(selectedProduct);
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
            <div className="cart-container shadow">
                <h3>Products Cart</h3>
                {
                    <RandomItem
                        randomItem={randomItem}
                    ></RandomItem>
                }
                {
                    cart.map(item => <Cart
                        key={item.id}
                        item={item}
                    ></Cart>)
                }
                <button onClick={() => randomFunc(cart, randomNumber)}>click</button>
                <button>Reset</button>
            </div>
        </div>
    );
};

export default Shop;