'use client'
import React, { ReactNode, createContext, useEffect, useState } from 'react'

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
    updateQuantity: (item: Item) => void;
    totalItemsPrice: number;
}

interface CartProviderProps {
    children: ReactNode
}

const CartContext = createContext<CartContextType | undefined>(undefined)

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {

    const [cart, setCart] = useState<Item[]>([])
    const [totalItemsPrice, setTotalItemsPrice] = useState<number>(0)


    const addItem = (item: Item) => {
        const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);

        if (existingItemIndex !== -1) {
            // If item already exists, update quantity
            const updatedCart = cart.map((cartItem, index) => {
                if (index === existingItemIndex) {
                    console.log(cartItem.quantity);
                    let quantityUpdated = cartItem.quantity ? cartItem.quantity + 1 : cartItem.quantity = 2;
                    console.log("quantity", quantityUpdated);
                    return {
                        ...cartItem,
                        quantity: quantityUpdated,
                    };
                }
                return cartItem;
            });
            setCart(updatedCart);
        } else {
            // If item doesn't exist, add it to the cart with quantity 1
            const updatedCart = [
                ...cart,
                {
                    ...item,
                    quantity: 1,
                },
            ];
            setCart(updatedCart);
        }
    };

    const removeItem = (itemId: number) => {
        const newCart = cart.filter(item => item.id !== itemId);
        setCart(newCart);
    };

    const updateQuantity = (item: Item) => {
        const updatedCart = cart.map((cartItem) => {
            if (cartItem.id === item.id) {
                const updatedValue = Math.max(1, cartItem.quantity - 1);
                return { ...cartItem, quantity: updatedValue };
            }
            return cartItem;
        });
        setCart(updatedCart);
    };

    useEffect(()=> {
        cart.map((item)=>{
            setTotalItemsPrice((totalItemsPrice + item.price))
        })
        console.log("cart", cart)
    },[cart])

    useEffect(() => {
        console.log('total', totalItemsPrice)
    }, [totalItemsPrice])

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, updateQuantity, totalItemsPrice }}>
            {children}
        </CartContext.Provider>
    )
}
export { CartContext, CartProvider }
