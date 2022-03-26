import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { ImCross } from 'react-icons/im'
import Modal from 'react-modal';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [randomItem, setRandomItem] = useState([]);
    // console.log(typeof cart);
    // console.log(cart.length);

    const randomFunc = (cart) => {
        const randomNumber = Math.floor(Math.random() * cart.length)
        const randomValue = (cart[randomNumber]);
        setRandomItem(randomValue);
        openModal()
        // console.log(cart, randomNumber);
    }
    // console.log(randomItem);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        if (cart.length > 3) {
            alert('Please choose maximum 4 item');
            return
        } else {
            const selectedProduct = [...cart, product];
            setCart(selectedProduct);
        }

    }
    // reset function for reset choosed items
    const resetFunc = () => {
        setCart([]);
    }
    // modal 
    const [modalIsOpen, setIsOpen] = React.useState(false);
    //Modal open function
    function openModal() {
        setIsOpen(true);
    }
    // Modal close function
    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className='shop-container container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container shadow">
                <h3>Products Cart</h3>
                {
                    cart.map(item => <Cart
                        key={item.id}
                        item={item}
                    ></Cart>)
                }
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal">
                    <ImCross className='cross' onClick={closeModal}></ImCross>
                    <img className='modal-image' src={randomItem.picture} alt="" />
                    <h1>{randomItem.name}</h1>
                </Modal>
                <button onClick={() => randomFunc(cart)} className="btn btn-success w-100">Choose One</button>
                <br />
                <button onClick={resetFunc} className="btn btn-warning w-100">Reset</button>
            </div>
        </div>
    );
};

export default Shop;