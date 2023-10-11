import React from 'react'
import { Row, Col } from 'react-bootstrap';
import Image from 'next/image';

import styles from './Footer.module.scss';
import SocialLinks from './../SocialLinks/SocialLinks';

const Footer: React.FC = () => {
    return (
        <div className={`${styles.footer} pb-0`}>
            <Row className='px-5 py-4'>
                <Col sm={12} lg={3} className='mb-3'>
                    <div className='text-center text-lg-start'>
                        <Image src="/images/logo-typo.png" className='mb-3' width={150} height={40} alt="" />
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </div>
                        <SocialLinks />
                    </div>

                </Col>
                <Col sm={12} lg className='mb-3'>
                    <div className='text-center text-lg-start'>
                        <h5 className='fw-semibold'>Sobre</h5>
                        <div>
                            <div className="custom-font-small-02 opacity-75 mb-1">Sobre nós</div>
                            <div className="custom-font-small-02 opacity-75 mb-1">Encontre a loja</div>
                            <div className="custom-font-small-02 opacity-75 mb-1">Categorias</div>
                            <div className="custom-font-small-02 opacity-75 mb-1">Blogs</div>
                        </div>
                    </div>
                </Col>
                <Col sm={12} lg className='mb-3'>
                    <div className='text-center text-lg-start'>
                        <h5 className='fw-semibold'>Parceiros</h5>
                        <div>
                            <div className="custom-font-small-02 opacity-75 mb-1">Sobre nós</div>
                            <div className="custom-font-small-02 opacity-75 mb-1">Encontre a loja</div>
                            <div className="custom-font-small-02 opacity-75 mb-1">Categorias</div>
                            <div className="custom-font-small-02 opacity-75 mb-1">Blogs</div>
                        </div>
                    </div>
                </Col>
                <Col sm={12} lg className='mb-3'>
                    <div className='text-center text-lg-start'>
                        <h5 className='fw-semibold'>Informação</h5>
                        <div>
                            <div className="custom-font-small-02 opacity-75 mb-1">Central de ajuda</div>
                            <div className="custom-font-small-02 opacity-75 mb-1">Reembolso</div>
                            <div className="custom-font-small-02 opacity-75 mb-1">Frete</div>
                        </div>
                    </div>
                </Col>
                <Col sm={12} lg className='mb-'>
                    <div className='text-center text-lg-start'>
                        <h5 className='fw-semibold'>Para usúarios</h5>
                        <div>
                            <div className="custom-font-small-02 opacity-75 mb-1">Login</div>
                            <div className="custom-font-small-02 opacity-75 mb-1">Register</div>
                            <div className="custom-font-small-02 opacity-75 mb-1">Configurações</div>
                            <div className="custom-font-small-02 opacity-75 mb-1">Meus pedidos</div>
                        </div>
                    </div>
                </Col>


            </Row>
            <Row className={`${styles.footerLegal} text-center text-lg-start p-3`}>
                <Col>
                    © 2023 Will Dourado
                </Col>
            </Row>
        </div>
    )
}

export default Footer
