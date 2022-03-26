import React, { useState } from 'react';

const Cart = (props) => {
    // console.log(props);
    const { item } = props;
    // console.log(item);

    // const [laptop, setLaptop] = useState([])

    const handleChooseOne = () => {
        console.log('random one');
    }

    return (
        <div>
            <h5>Items: {item.name} </h5>
            <button onClick={() => handleChooseOne()}>Choose One:</button>
        </div>
    );
};

export default Cart;