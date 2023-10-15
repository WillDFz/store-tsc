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


const Header: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false)
  const [cartIsOpen, setCartOpen] = useState<boolean>(false)

  const { cart } = useContext(CartContext)

  return (
    <div>
      <Container className='custom-light-bg'>
        <Row className='py-2'>
          <Col>
            <div style={{ display: "flex", zIndex: '3' }}>

              <Hamburger size={20} toggled={isOpen} toggle={setOpen} />
            </div>
          </Col>
          <Col>
            <Image src="/images/logo-typo.png" alt="logo" width={164} height={48} />
            <div></div>
          </Col>
          <Col className='d-flex justify-content-end'>
            <div>
              <button onClick={(e) => setCartOpen(true)} className='btn'>
                <Image src="/svg/cart.svg" alt="logo" width={25} height={25} />
              </button>
              <span>{cart.length}</span>
            </div>
          </Col>
        </Row>
        <Row>
          <SearchBar />
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
    </div>
  )
}

export default Header
