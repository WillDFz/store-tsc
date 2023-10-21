'use client'
import React, { useContext } from 'react'
import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Hamburger from 'hamburger-react'
import Image from 'next/image';
import SearchBar from '../SearchBar/SearchBar';
import Sidebar from '../Sidebar/Sidebar';
import CartModal from '../CartModal/CartModal'
import { CartContext } from '@/components/Context/CartContext/CartContext'
import Navbar from './../Navbar/Navbar';
import Link from 'next/link';


const Header: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false)
  const [cartIsOpen, setCartOpen] = useState<boolean>(false)

  const cartContext = useContext(CartContext)

  if (!cartContext) {
    return
  }
  const { cart } = cartContext

  return (
    <header>
      <Container fluid className='custom-light-bg px-md-5 pt-md-3'>
        <Row className='d-flex align-items-center py-2'>
          <Col className='d-lg-none'>
            <div style={{ display: "flex", zIndex: '3' }}>

              <Hamburger size={20} toggled={isOpen} toggle={setOpen} />
            </div>
          </Col>
          <Col>
          <Link href="/">
            <Image src="/images/logo-typo.png" alt="logo" width={164} height={48} />
          </Link>
          </Col>
          <Col className='d-none d-lg-block'>
            <SearchBar />
          </Col>
          <Col className='d-flex justify-content-end'>
            <div className='d-flex'>
              <div className='d-none d-md-flex flex-column me-3'>
                <button className='btn'>
                  <Image src="/svg/user.svg" alt="user" width={25} height={25} />
                </button>
                <span className='custom-font-small'>Minha conta</span>
              </div>
              <div className='d-flex flex-column position-relative'>
                <button onClick={(e) => setCartOpen(true)} className='btn'>
                  <Image src="/svg/cart.svg" alt="logo" width={25} height={25} />
                </button>
                <span className='custom-font-small cart-amout-badge'>{cart.length}</span>
                <span className='d-none d-lg-block custom-font-small'>Carrinho</span>

              </div>
            </div>
          </Col>
        </Row>
        <Row className='d-lg-none'>
          <SearchBar />
        </Row>
        <Row>
          <Navbar />
        </Row>
      </Container>
      {isOpen &&
        <>
          <div className='overlay' onClick={e => setOpen(!isOpen)}></div>
          <Sidebar sidebar={isOpen} setSidebar={setOpen} />
        </>
      }
      {
        cartIsOpen &&
        <CartModal closeCart={setCartOpen} />
      }
    </header>
  )
}

export default Header
