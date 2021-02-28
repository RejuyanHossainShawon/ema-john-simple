import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice =cart.reduce((total,product)=> total+ product.price,0);

    // let totalPrice =0;
    // for (let i = 0; i < cart.length; i++) {
    //     const product = cart[i];
    //     totalPrice += product.price;
        
    // }
    let shippingCost = 0;
    if(totalPrice>35){
        shippingCost=0;
    }  
     else if (totalPrice >15){
         shippingCost=4.99;

     }
     else if(totalPrice >0) {
         shippingCost = 12.99;
     }
     const tax= (totalPrice/10).toFixed(2);
     const grandTotal = (totalPrice + shippingCost +Number(tax)).toFixed(2)

   

    return (
        <div>
            <h3>Order Summary</h3>
            <p>Items Ordered:{cart.length}</p>
            <p>Product PRice : {totalPrice}</p>
            <p>Shipping Cost :{shippingCost}</p>
            <p>Tax + VAT :{tax}</p>
            <p>Total Price:{grandTotal}</p>
        </div>
    );
};

export default Cart;