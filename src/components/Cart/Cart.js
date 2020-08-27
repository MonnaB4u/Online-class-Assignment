import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart=props.cart;
   
    //const total = cart.reduce((total,prd) => total+prd.price,0)

    let total=0;
   for (let i = 0; i < cart.length; i++) {
       const product = cart[i];
       total = total + product.price;
       
   }
    
    return (
        <div className=" cart-container">
            <h4>Enroll summury</h4>
           <p>Items ordered: {cart.length} </p>
           <p>Total price: ${total} </p>

        </div>
    );
};

export default Cart;