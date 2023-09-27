'use client'
import React from 'react'
import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Hamburger from 'hamburger-react'
import Image from 'next/image';
import SearchBar from './../SearchBar/SearchBar';


const Header: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false)

  return (
    <div>
      <Container>
        <Row className='py-2'>
          <Col>
            <Hamburger size={20} toggled={isOpen} toggle={setOpen} />
          </Col>
          <Col>
            <Image src="/images/logo-typo.png" alt="logo" width={164} height={48} />
            <div></div>
          </Col>
          <Col className='d-flex justify-content-end'>
            <button className='btn'>
              <Image src="/svg/cart.svg" alt="logo" width={25} height={25} />
            </button>
          </Col>
        </Row>
        <Row>
          <SearchBar />

        </Row>
      </Container>
    </div>
  )
}

export default Header
