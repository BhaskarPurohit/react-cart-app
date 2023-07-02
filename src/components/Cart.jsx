import React from 'react'
import "../styles/cart.scss"
import {AiFillDelete} from "react-icons/ai"
import { useSelector } from 'react-redux';

const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
// const img2 =
//   "https://cdn.shopify.com/s/files/1/2428/5565/products/Neemans-HaleBlack-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg?v=1662876260";



const Cart = () => {
    const {cartItems} = useSelector((state)=> state.cart)
  return (
    <div className="cart">
        <main>
           
             
                {cartItems.length > 0 ?(
                    cartItems.map(i=>(
                        <CartItem imgSrc={img1} name={"mac book"} price={232423} qty={1} id="sfdsdf"/>
                    ))
                ):( <h1>No items</h1>)}
             
        </main>
        <aside>
            <h2>Subtotal: ${2000}</h2>
            <h2>Shipping: ${20}</h2>
            <h2>Tax: ${2}</h2>
            <h2>Total: ${12000}</h2>
        </aside>
    </div>
  )
}

const CartItem = ({imgSrc, name, price, qty, decrement, increment, deleteHandler, id})=>
    (
        <div className="cartItem"><img src={imgSrc} alt="" />
       <article>
        <h3>${name}</h3>
        <p>${price}</p>
       </article>
       <div>
        <button onClick={()=> decrement(id)}>-</button>
        <p>{qty}</p>
        <button onClick={()=> increment(id)}>+</button>
       </div>

       <AiFillDelete/>
    
    
    </div>
    )




export default Cart