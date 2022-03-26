import React from 'react';

const RandomItem = (props) => {
    const { name } = props.randomItem;
    // console.log(randomItem);
    return (
        <div>
            <h3>Name: {name}</h3>
        </div>
    );
};

export default RandomItem;