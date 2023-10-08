'use client'
import axios from 'axios'
import { useState, useEffect } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import styles from './ProductSlider.module.scss'
import Rating from './../Rating/Rating';
import { Container } from 'react-bootstrap';


interface ProductSliderProps {
  category: string
}

interface Product {
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
}

const ProductSlider: React.FC<ProductSliderProps> = ({ category }) => {
  const [products, setProducts] = useState<Product[]>([])

  const [apiRoute, setApiRoute] = useState<String>()

  useEffect(() => {
    if (category === 'all') {
      setApiRoute('products')
    } else {
      setApiRoute(`products/category/${category}`)
    }
  }, [category])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/${apiRoute}`)
        console.log(response.data)
        setProducts(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchProducts()
  }, [apiRoute])

  return (
    <div className='custom-light-bg pe-0'>
      <Swiper
        slidesPerView={2.5}
        spaceBetween={0}
        className={`${styles.slider} mb-3`}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className=''>
            <div className={`${styles.item} text-center p-2`}>

              <div className={`${styles.imageContainer} d-flex align-items-center justify-content-center mb-3`}><img src={product.image} className={`${styles.itemImage}`} alt="" /></div>
              <div>
                <div className={`${styles.itemName} mb-2`}>{product.title}</div>
                <div>${product.price}</div>
                <Rating rating={product.rating.rate} />
              </div>
            </div>

          </SwiperSlide>


        ))}

      </Swiper>
    </div>
  )
}

export default ProductSlider
