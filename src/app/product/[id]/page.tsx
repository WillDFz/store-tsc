'use client'

import React, { useEffect, useState } from 'react'

import Product from '@/interfaces/Product'
import axios from 'axios'
import { Container, Row, Col } from 'react-bootstrap'
import ProductImage from './../../../components/ProductImage/ProductImage';
import ProductForm from './../../../components/ProductForm/ProductForm';
import ProductSlider from './../../../components/UI/ProductsSlider/ProductSlider';

interface PageProps {
  params: { id: number }
}



const Product: React.FC<PageProps> = ({ params }) => {
  const id = params.id

  const [product, setProduct] = useState<Product>()

  useEffect(() => {
    const fecthProduct = async (id: number) => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
        setProduct(response.data)
        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    fecthProduct(id)
  }, [id])

  return (
    <>
      {product && (
        <Container className='mt-lg-3'>
          <Row className='mb-5'>
            <Col sm={12} lg={6} className='p-3'>
              <ProductImage image={product?.image!} />
            </Col>

            <Col sm={12} lg={6}>
              <ProductForm product={product} />
            </Col>
          </Row>
          <Row>
            <h3 className='text-center'>Produtos relacionados</h3>
            <ProductSlider category={product.category}/>
          </Row>
        </Container>
      )
      }
    </>
  )
}

export default Product