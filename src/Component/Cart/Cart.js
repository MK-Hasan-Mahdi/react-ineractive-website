import React, { useState } from 'react';

const Cart = (props) => {
    const { name } = props.item;
    // console.log(item);

    return (
        <div>
            <h5>{name} </h5>
            {/* <button onClick={() => handleChooseOne()}>Choose One:</button> */}
        </div>
    );
};

export default Cart;