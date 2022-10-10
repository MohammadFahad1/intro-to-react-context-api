import React, { useContext } from 'react';
import { CartContext } from '../Products/Products';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const Cart = () => {
    const Cart = useContext(CartContext)[0];
    let totalPrice = 0;
    for (let i = 0; i < Cart.length; i++) {
        totalPrice = totalPrice + parseInt(Cart[i].price);
    }
    const removeFromCart = useContext(CartContext)[3];

    return (
        <div className="drawer drawer-mobile bg-indigo-400 p-2 h-full">
            <div className="drawer-side">
                <h3 className='text-2xl font-bold text-center bg-yellow-200 py-1'>Selected Products: {Cart.length}</h3>
                <ul className="menu p-4 overflow-y-auto w-80 text-base-content">
                    {
                        (Cart.length === 0) ?
                            "Please select atleast 1 product" :
                            Cart.map(product => <li className='py-3 flex flex-row' key={product.id}>{product.name} <span className='bg-red-300 text-red-900 font-bold py-1 px-2 rounded-3xl ml-1' onClick={() => removeFromCart(product)}>X</span></li>)
                    }
                </ul>
                {Cart.length > 0 ?
                    <>
                        <p className={`text-2xl ${totalPrice > 100 && 'bg-orange-400'} ${(totalPrice > 200) && 'bg-green-400'} mb-4`}>Total Price: {totalPrice}</p>
                        <LineChart width={300} height={200}
                            data={Cart}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" stroke='lightgreen' />
                            <YAxis stroke='lightgreen' />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="price" stroke="orange" activeDot={{ r: 8 }} />
                        </LineChart>
                        <span className='py-4'></span>
                    </>
                    : ""}
            </div>
        </div >
    );
};

export default Cart;