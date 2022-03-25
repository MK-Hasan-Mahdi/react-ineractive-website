import React from 'react';

const Cart = (props) => {
    // console.log(props);
    const { cart } = props;
    return (
        <div>
            <h3>Products Cart</h3>
            <h5>Selected Item: {cart.length} </h5>
            <h5>Item: </h5>
        </div>
    );
};

export default Cart;