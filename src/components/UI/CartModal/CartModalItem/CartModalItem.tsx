import React, { useContext } from 'react'
import Image from 'next/image';

import styles from './CartModalItem.module.scss'
import { CartContext } from '@/components/Context/CartContext/CartContext';




const CartModalItem = ({ cart, addItem }) => {

    const { removeItem, updateQuantity } = useContext(CartContext)

    return (
        <div className='px-3'>

            {cart.map((item, index) => (
                <div className={`${styles.item} p-3`} key={index}>
                    <div className='d-flex mb-3'>
                        <div className={`${styles.imageContainer} me-3`}>
                            <Image src={item.image} width={60} height={60} alt='' />
                        </div>
                        <div className='w-50 custom-font-small-02 pt-2'>{item.title}</div>
                        <div style={{ position: 'absolute', right: '20px' }}>
                            <button className='btn' onClick={(e) => removeItem(item.id)}>
                                <Image src="svg/trash.svg" width={20} height={20} alt='' />
                            </button>
                        </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-between'>

                        <div className={`${styles.quantityInput} d-flex align-items-center`}>
                            <button className='d-flex btn' onClick={(e)=> updateQuantity(item)}>
                                <Image src='svg/minus.svg' width={20} height={20} alt='minus' />
                            </button>
                            <div className='px-2'>{item?.quantity}</div>
                            <button className='d-flex btn' onClick={(e) => addItem(item)}>
                                <Image src="svg/plus.svg" width={20} height={20} alt='plus' />
                            </button>
                        </div>
                        <div className='fw-semibold'>${(item.price * item.quantity).toFixed(2)}</div>
                    </div>

                </div>

            ))}

        </div>
    )
}

export default CartModalItem