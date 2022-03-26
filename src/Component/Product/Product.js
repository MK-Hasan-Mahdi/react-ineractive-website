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
            <div className="product m-2 py-3 shadow border">
                <img className='m-auto' src={picture} alt="" />
                <div className="product-info">
                    <h5>{name}</h5>
                    <h6>Price: ${price}</h6>
                </div>
                <button onClick={() => handleAddToCart(product)} className='btn-shopping btn-primary'>
                    <p className='btn-text'>Add To Cart</p>
                </button>
            </div>
        </div>
    );
};

export default Product;