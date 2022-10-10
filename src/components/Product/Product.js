import React, { useContext } from 'react';
import { CartContext } from '../Products/Products';

const Product = ({ tshirt }) => {
    const { picture, name, price } = tshirt;
    const addToCart = useContext(CartContext)[2];
    const Cart = useContext(CartContext)[0];

    return (
        <div className="card w-full glass">
            <figure><img src={picture} alt={name} className='mt-3' style={{ maxHeight: '220px' }} /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{name}</h2>
                <div className="card-actions justify-between items-center">
                    <h2 className='text-2xl'>${price}</h2>
                    <button className="btn btn-primary" onClick={() => addToCart(tshirt)} disabled={(Cart.includes(tshirt) ? true : false)}>{(Cart.includes(tshirt) ? 'Added' : 'Add to Cart')}</button>
                </div>
            </div>
        </div>
    );
};

export default Product;