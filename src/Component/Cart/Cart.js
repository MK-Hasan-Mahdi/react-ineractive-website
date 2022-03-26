import React, { useState } from 'react';

const Cart = (props) => {
    const { name } = props.item;
    // console.log(item);
    // const [laptop, setLaptop] = useState([])
    const handleChooseOne = () => {
        console.log('random one');
    }
    return (
        <div>
            <h5>Items: {name} </h5>
            <button onClick={() => handleChooseOne()}>Choose One:</button>
        </div>
    );
};

export default Cart;