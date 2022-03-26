import React from 'react';

const Cart = (props) => {
    // console.log(props);
    const { item } = props;
    console.log(item);

    return (
        <div>
            <h5>Items: {item} </h5>
        </div>
    );
};

export default Cart;