'use client'
import axios from 'axios'
import { useState, useEffect, useContext } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './ProductSlider.module.scss'
import Rating from './../Rating/Rating';
import { CartContext } from '@/components/Context/CartContext/CartContext';



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
  const [apiRoute, setApiRoute] = useState<String>()

  const [products, setProducts] = useState<Product[]>([])

  const { addItem } = useContext(CartContext);


  const cartAlert = (id: number) => {

    toast('Produto adicionado ao carrinho!', {
      toastId: id,
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
      className: 'w-75 custom-font-small-02 ms-auto mt-4'
    });
  }




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
    <>
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
                  <button className='buy-btn' onClick={(e) => { addItem(product), cartAlert(product.id) }}>Comprar</button>
                </div>
              </div>

            </SwiperSlide>


          ))}

        </Swiper>
      </div>
      <div className='px-3'>

        <ToastContainer />
      </div>
    </>
  )
}

export default ProductSlider
