'use client'
import React, { createContext, useEffect, useState } from 'react'

interface Item {
    id: number,
    name: string,
    price: number,
    quantity: number
}

interface CartContextType {
    cart: Item[];
    addItem: (item: Item) => void;
    removeItem: (item: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined)

const CartProvider: React.FC = ({ children }) => {

    const [cart, setCart] = useState<Item[]>([])


    const addItem = (item: Item) => {
        const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);

        if (existingItemIndex !== -1) {
            // If item already exists, update quantity
            const updatedCart = cart.map((cartItem, index) => {
                if (index === existingItemIndex) {
                    console.log(cartItem.quantity)
                    let quantityUpdated = cartItem.quantity ? cartItem.quantity + 1 : cartItem.quantity = 2;
                    return {
                        ...cartItem,
                        quantity: quantityUpdated,
                    };
                }
                return cartItem;
            });
            setCart(updatedCart);
        } else {
            setCart([...cart, item]);
        }
    };

    const removeItem = (itemId: number) => {
        const newCart = cart.filter(item => item.id !== itemId);
        setCart(newCart);
    };

    useEffect(()=>{
        console.log("cart", cart)
    },[cart])


    return (
        <CartContext.Provider value={{ cart, addItem, removeItem }}>
            {children}
        </CartContext.Provider>
    )
}
export { CartContext, CartProvider }
