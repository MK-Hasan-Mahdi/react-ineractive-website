import React from 'react';
import './Product.css';

const Product = ({ handleAddToCart, product }) => {
    // const { handleAddToCart, product } = props;
    const { name, price, picture } = product;

    /* const handleAddToCart = () => {
        console.log('button clicked');
    } */

    return (
        <div>
            <div className="product p-3 m-2 shadow border">
                <img className='m-auto' src={picture} alt="" />
                <h4>Name: {name}</h4>
                <h5>Price: ${price}</h5>
                <button onClick={() => handleAddToCart(product)}>
                    <p>Add To Cart</p>
                </button>
            </div>
        </div>
    );
};

export default Product;