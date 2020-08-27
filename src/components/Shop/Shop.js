import React from 'react';
import './Shop.css';
import Books from '../../Books/Books';
import { useState } from 'react';
import Product from './Product/Product';
import Cart from '../Cart/Cart';


const Shop = () => {
  const data=Books;
 
 const [books,setBooks]=useState(data)
 const [cart, setCart] = useState([]);

   const handleAddProduct = (product) =>{

      
       const newCart=[...cart,product];
       setCart(newCart);
   }

    return (
        <div className="book-shop">

            <div className="product-container">

                            <h1>Here are {books.length} Course. Choose from here</h1>
                        
                {
                    books.map(book => <Product 

                        handleAddProduct = {handleAddProduct}

                        product={book} >{book.Name}
                      
                        
                        </Product>)
                }
            
            </div>
            <div className="cart-coantainer">
              <Cart cart={cart}></Cart>
               
            
        </div>
        
        </div>
        
    );
    
};

export default Shop;