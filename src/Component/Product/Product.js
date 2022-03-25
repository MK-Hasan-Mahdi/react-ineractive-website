import React from 'react';

const Product = (props) => {
    const { id, name, price, picture } = props.product;

    const handleAddToCart = () => {
        console.log('button clicked');
    }

    return (
        <div>
            <div className="card p-3 m-2 shadow border">
                <p>id: {id}</p>
                <img className='w-50 m-auto' src={picture} alt="" />
                <h4>Name: {name}</h4>
                <h5>Price: {price}</h5>
                <button onClick={handleAddToCart}>
                    <p>Add To Cart</p>
                </button>
            </div>
        </div>
    );
};

export default Product;