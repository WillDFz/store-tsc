'use client'
import axios from 'axios'
import { useState, useEffect, useContext } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import styles from './ProductSlider.module.scss'
import Rating from './../Rating/Rating';
import { CartContext } from '@/components/Context/CartContext/CartContext';
import { Container } from 'react-bootstrap';
import Link from 'next/link';



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
  },
  quantity: number
}

const ProductSlider: React.FC<ProductSliderProps> = ({ category }) => {
  const [apiRoute, setApiRoute] = useState<String>()

  const [products, setProducts] = useState<Product[]>([])

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
        setProducts(response.data)
      } catch (error) {
      }
    }
    fetchProducts()
  }, [apiRoute])

  return (
    <Container className=' pe-0'>
      <Swiper
        className={`${styles.slider} mb-3`}
        slidesPerView={2.25}
        spaceBetween={5}
        loop={true}
        breakpoints={{
          1200: {
            slidesPerView: 5.5,
            spaceBetween: 10,
            loop: true
          }
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className='custom-light-bg'>
            <div className={`${styles.item} text-center p-2`}>
              <Link href={`/product/${product.id}`} className="no-decoration-link">
                <div className={`${styles.imageContainer} d-flex align-items-center justify-content-center mb-3`}><img src={product.image} className={`${styles.itemImage}`} alt="" /></div>
                <div>
                  <div className={`${styles.itemName} mb-2`}>{product.title}</div>
                  <div>${product.price}</div>
                  <Rating rating={product.rating.rate} />
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}

export default ProductSlider
