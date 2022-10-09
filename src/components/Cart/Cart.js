import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div className="drawer drawer-mobile bg-indigo-400 p-2">
            <div className="drawer-side">
                <h3 className='text-2xl font-bold text-center bg-yellow-200 py-1'>Selected Products: </h3>
                <ul className="menu p-4 overflow-y-auto w-80 text-base-content">
                    {
                        (cart.length === 0) ?
                            "Please select atleast 1 product" :
                            cart.map(product => <li className='py-3'>{product.name}</li>)
                    }
                </ul>

            </div>
        </div>
    );
};

export default Cart;