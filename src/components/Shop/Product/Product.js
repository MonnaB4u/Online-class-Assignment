import React from 'react';
import './Product.css'

const Product = (props) => {
    const  {Name, price,img,about}=props.product;
    // console.log(props)
    return (
    
        <div className="product">
   
                <div className="image" >
                        <img  src={img} alt=""/>

                </div>

                <div className="product-name">

                <h2>{Name}</h2>
                
                <br/>

             <p> <small>{about}</small> </p>
    <h4>Price: ${price}</h4>

             <button 
             className="enroll"
             
             onClick={ ()=> props.handleAddProduct(props.product)}

              >
                  
                  Buy now</button>
                </div>

     

        </div>
    );
};

export default Product;