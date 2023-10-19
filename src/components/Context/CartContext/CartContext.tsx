'use client'
import React, { ReactNode, createContext, useEffect, useState } from 'react'

interface Item {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string
    rating: {
        count: number,
        rate: number
    }
    quantity: number
}
interface CartContextType {
    cart: Item[];
    addItem: (item: Item) => void;
    removeItem: (item: number) => void;
    totalItemsPrice: number;
    plusQuantity: (itemId: number) => void;
    minusQuantity: (itemId: number) => void;
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

    const plusQuantity = (itemId: number) => {
        const updatedCart = cart.map((item) => {
            if (item.id === itemId) {
                return {
                    ...item,
                    quantity: item.quantity + 1,
                };
            } else {
                return item;
            }
        });
        setCart(updatedCart);
    };

    const minusQuantity = (itemId: number) => {
        const updatedCart = cart.map((item) => {
            if (item.id === itemId) {
                return {
                    ...item,
                    quantity: Math.max(1, item.quantity - 1),
                };
            } else {
                return item;
            }
        });
        setCart(updatedCart);
    };

    const updateTotalPrice = (cart: Item[]) => {
        let updatedPrices = 0
        cart.map((item)=>{
            updatedPrices += item.price * item.quantity
            console.log("inside",updatedPrices)
        })
        console.log("outside",updatedPrices)

        setTotalItemsPrice(updatedPrices)
    }

    useEffect(() => {
        updateTotalPrice(cart)
    }, [cart])

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, minusQuantity, plusQuantity, totalItemsPrice }}>
            {children}
        </CartContext.Provider>
    )
}
export { CartContext, CartProvider }
