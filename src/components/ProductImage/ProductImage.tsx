import React from 'react'
import styles from './ProductImage.module.scss'

interface ProductImageProps {
    image: string
}

const ProductImage: React.FC<ProductImageProps> = ({ image }) => {
    return (
        <div className={`${styles.imageContainer}`}><img src={image} className='w-100' alt='' /></div>
    )
}

export default ProductImage