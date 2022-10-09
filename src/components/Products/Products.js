import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Products = () => {
    const tshirts = useLoaderData().data;
    const [cart, setCart] = useState([]);

    const addToCart = product => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className="flex justify-between mx-5 flex-wrap lg:flex-nowrap flex-col lg:flex-row">
            <main style={{ flex: '3' }}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mr-5'>
                    {
                        tshirts.map(tshirt => <Product key={tshirt.id} tshirt={tshirt} addToCart={addToCart}></Product>)
                    }
                </div>
            </main>
            <aside style={{ flex: '1' }}>
                <Cart cart={cart}></Cart>
            </aside>
        </div>
    );
};

export default Products;