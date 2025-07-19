import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { useState } from "react";

const Cart =()=>{
    const cartItems = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch();
   const handleClearCart =()=>{
    dispatch(clearCart());
   }
 
  
return(

    <div className="text-center m-4 p-4">
    <h1 className="text-2xl font-bold">Cart</h1>
    {cartItems.length === 0 ? <h1>Cart is empty Add items to Cart</h1>:<h1>Thank You</h1>}
  
    <div className="w-6/12 m-auto">
    <ItemList items = {cartItems}/>
    <button className="p-2 m-2 bg-black text-white shadow-lg rounded-lg cursor-pointer" onClick={handleClearCart}>clear Cart</button>

    </div>
    
    </div>
)
}
export default Cart