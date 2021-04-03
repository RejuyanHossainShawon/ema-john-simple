import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [cart,setCart] = useState([]);

    const removeProduct = (key) => {
        console.log(key);
        console.log('remove '+key);
        const newCart = cart.filter(pd => pd.key !== key);
        setCart(newCart);
        removeFromDatabaseCart(key);
    }


    useEffect(()=>{
    // cart
     const savedCart = getDatabaseCart();
     const productKeys = Object.keys(savedCart);
     const cardProducts= productKeys.map(key => {
         const product =fakeData.find(pd => pd.key === key);
         product.quantity= savedCart[key];

         return product;
     });
     setCart(cardProducts);
    
    },[])
    return (
        <div>
            <h1 className="text-center">Card Items :{cart.length}</h1>
            <div className="two-part-container">
              <div className="first-part">
              {
     
    
     cart.map(pd => <ReviewItem removeProduct={removeProduct}   key={pd.key} product={pd}></ReviewItem>)
         }
                  </div> 

              <div className="second-part">
                  <Cart cart={cart}></Cart>

              </div>
           
           </div>
          


        </div>
    );
};

export default Review;