import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import {FaShoppingCart} from "react-icons/fa";

const Cart = () => {

    const {cart} = useSelector((state) => state.cart);
    
    return (
        <div>
            <NavLink to="/cart">
                <div className="relative">
                    <FaShoppingCart className="text-2xl" />
                    {
                        cart?.length > 0 &&
                        <span
                            className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white"
                        >{cart?.length}</span>
                    }

                </div>
            </NavLink>

        </div>
    )
}

export default Cart
