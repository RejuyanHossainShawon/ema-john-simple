import React, { useState } from 'react';
import './Shop.css';
import '../../fakeData'
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart } from '../../utilities/databaseManager';

const Shop = () => {
    
    const firstTen = fakeData.slice(0,10);
    const [products,setProducts] =useState(firstTen);
    
    
    const [cart,setCart]= useState([]);
    
    
    const  handleAddProduct = (product) => {
        
        
        const newCart= [...cart,product];
        setCart(newCart);
        const sameProduct = newCart.filter(pd => pd.key === product.key);
        const count = sameProduct.length;
        addToDatabaseCart(product.key,count);
    }
    
    return (
        <div className='two-part-container'>
           <div className="first-part">
                    
                        {
                            products.map(product => <Product key={product.key}  showAddToCart={true} handleAddProduct={handleAddProduct} product={product}></Product>)
                        }
        
            
           </div>
           <div className="second-part">
              <Cart cart={cart}></Cart>
           </div>
            
            
        </div>
    );
};

export default Shop;