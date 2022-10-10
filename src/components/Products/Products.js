import React, { createContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

export const CartContext = createContext([]);

const Products = () => {
    const tshirts = useLoaderData().data;
    const [cart, setCart] = useState([]);

    const addToCart = product => {
        if (cart.includes(product) === false) {
            const newCart = [...cart, product];
            setCart(newCart);
        }
    }

    const removeFromCart = product => {
        const remaining = cart.filter(p => p.id !== product.id);
        setCart(remaining);
    }

    return (
        <CartContext.Provider value={[cart, setCart, addToCart, removeFromCart]}>
            <div className="flex justify-between mx-5 flex-wrap lg:flex-nowrap flex-col lg:flex-row" style={{ backgroundImage: `url('arch.jpg')`, backgroundSize: 'cover' }}>
                <main style={{ flex: '3' }}>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mr-5'>
                        {
                            tshirts.map(tshirt => <Product key={tshirt.id} tshirt={tshirt} addToCart={addToCart}></Product>)
                        }
                    </div>
                </main>
                <aside style={{ flex: '1' }}>
                    <Cart></Cart>
                </aside>
            </div>
        </CartContext.Provider >
    );
};

export default Products;