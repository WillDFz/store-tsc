import { CartContext } from '@/components/Context/CartContext/CartContext'
import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image';

import styles from './CartModal.module.scss'
import CartModalItem from './CartModalItem/CartModalItem';

interface CartModalProps {
    closeCart: (boolean: boolean) => void;
}

const CartModal: React.FC<CartModalProps> = ({ closeCart }) => {
    const { cart, addItem, totalItemsPrice } = useContext(CartContext)



    return (
        <div className={`${styles.cartModal}`}>

            <div className={`${styles.cartModalHeader} d-flex align-items-center`}>
                <button className='d-flex btn' onClick={(e) => closeCart(false)}>
                    <Image src="svg/arrow-left.svg" width={16} height={16} alt='' />
                </button>
                <div className='fw-semibold ms-2'>
                    Carrinho
                </div>
            </div>
            {cart.length > 0 ?
                <>
                    <CartModalItem cart={cart} addItem={addItem} />
                    <div className='px-3'>
                        <div className='d-flex justify-content-between'>
                            <div>
                                Items({cart.length})
                            </div>
                            <div>
                                ${totalItemsPrice.toFixed(2)}
                            </div>
                        </div>
                    </div>
                </>
                : <div className='text-center p-5'>Carrinho vazio</div>
            }
        </div>
    )
}

export default CartModal