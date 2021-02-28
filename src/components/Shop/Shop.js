import React, { useState } from 'react';
import './Shop.css';
import '../../fakeData'
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const firstTen = fakeData.slice(0,10);
    const [products,setProducts] =useState(firstTen);
    
    const [cart,setCart]= useState([]);
    
    const  handleAddProduct = (props) => {
        console.log('add button clicked',props);
        const newCart= [...cart,props];
        setCart(newCart);
    }
    
    return (
        <div className='shop-container'>
           <div className="product-container">
                    
                        {
                            products.map(product => <Product handleAddProduct={handleAddProduct} product={product}></Product>)
                        }
        
            
           </div>
           <div className="cart-container">
              <Cart cart={cart}></Cart>
           </div>
            
            
        </div>
    );
};

export default Shop;