import { useContext } from 'react'

import Image from 'next/image'

import styles from './ProductForm.module.scss'
import { CartContext } from '../Context/CartContext/CartContext'

import Product from '@/interfaces/Product'

interface ProductFormProps {
    product: Product
}

const ProductForm: React.FC<ProductFormProps> = ({ product}) => {

    const cartContext = useContext(CartContext);

    if (!cartContext) {
        return
    }

    const { addItem } = cartContext

    return (
        <div className={`${styles.productForm} mt-lg-3`}>
            <h3 className='mb-3'>
                {product.title}
            </h3>
            <h5 className='mb-3'>
                ${product.price.toFixed(2)}
            </h5>
            <div className='mb-5'>
                <button onClick={(e) => addItem(product)} className='buy-btn d-flex align-items-center justify-content-center'>
                    <Image src="/svg/cart-white.svg" className='me-2' width={20} height={20} alt="cart"></Image>
                    Adicionar ao carrinho</button>
            </div>
            <div className={`${styles.descriptionContainer}`}>
                <div className='fw-bold'>Descrição:</div>
                <div>

                    {product.description}
                </div>
            </div>

        </div>
    )
}

export default ProductForm