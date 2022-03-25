import React from 'react';

const Product = (props) => {
    const { id, name, price, picture } = props.product;
    return (
        <div>
            <p>id: {id}</p>
            <img className='w-25' src={picture} alt="" />
            <h4>Name: {name}</h4>
            <h5>Price: {price}</h5>
        </div>
    );
};

export default Product;