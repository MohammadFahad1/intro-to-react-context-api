import React, { useContext } from 'react';
import { CartContext } from '../Products/Products';

const Cart = () => {
    const Cart = useContext(CartContext)[0];
    let totalPrice = 0;
    for (let i = 0; i < Cart.length; i++) {
        totalPrice = totalPrice + parseInt(Cart[i].price);
    }
    const removeFromCart = useContext(CartContext)[3];

    return (
        <div className="drawer drawer-mobile bg-indigo-400 p-2">
            <div className="drawer-side">
                <h3 className='text-2xl font-bold text-center bg-yellow-200 py-1'>Selected Products: {Cart.length}</h3>
                <ul className="menu p-4 overflow-y-auto w-80 text-base-content">
                    {
                        (Cart.length === 0) ?
                            "Please select atleast 1 product" :
                            Cart.map(product => <li className='py-3 flex flex-row'>{product.name} <span className='bg-red-300 text-red-900 font-bold py-1 px-2 rounded-3xl ml-1' onClick={() => removeFromCart(product)}>X</span></li>)
                    }
                </ul>
                {Cart.length > 0 ? <p className='text-2xl bg-amber-300'>Total Price: {totalPrice}</p> : ""}
            </div>
        </div>
    );
};

export default Cart;