import React from "react";
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Product = (props) => {<h4>{props.product.name}</h4>
  const {img,name,seller,price,stock}=props.product;
  
  return (
    <div className="product">
      <div>
          <img src={img} alt=""/>

      </div>
      <div>
        <h4 className='product-name'>{name}</h4>
        <br/>
        <p><small>by: {seller}</small></p>
        <p>price:{price}</p>
        <br/>
        <p><small>only {stock} left in the stock.Order soon</small></p>
        <button onClick={() => props.handleAddProduct(props.product)} className="cart-btn"><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
      </div>
    </div>
  );
};

export default Product;
