'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import Link from 'next/link';

interface Banner {
    id: number,
    image: string,
    title: string,
    text: string,
    link: string,
}

const HomeSlider: React.FC = () => {
    const bannersMobile: Banner[] = [
        { id: 1, image: '/images/banner-01-mobile.png', title: 'Título 1', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', link: '' },
        { id: 2, image: '/images/banner-01-mobile.png', title: 'Título 2', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', link: '' }
    ]
    const bannersDesktop: Banner[] = [
        { id: 1, image: '/images/banner-01-desktop.png', title: 'Título 1', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', link: '' },
        { id: 2, image: '/images/banner-01-desktop.png', title: 'Título 2', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', link: '' }
    ]

    return (
        <section className='mb-3'>
            <Swiper className='d-lg-none'>
                {bannersMobile.map((banner: Banner, index) =>
                    <SwiperSlide key={index} >
                        <div className='position-relative'>

                            <Image src={banner.image} alt={banner.title} width={375} height={180} />
                            <div className='text-over-banner-left w-50 px-3'>
                                <div className='fw-bold'>{banner.title}</div>
                                <div className='custom-font-small mb-3'>{banner.text}</div>
                                <Link href={banner.link} className='custom-light-badge'>Saiba mais</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                )
                }

            </Swiper>
            <Swiper className='d-none d-lg-block'>
                {bannersDesktop.map((banner: Banner, index) =>
                    <SwiperSlide key={index} >
                        <div className='position-relative'>

                            <img src={banner.image} className='w-100' alt={banner.title} />
                            <div className='text-over-banner-left w-50 px-3'>
                                <div className='fw-bold'>{banner.title}</div>
                                <div className='custom-font-small mb-3'>{banner.text}</div>
                                <Link href={banner.link} className='custom-light-badge'>Saiba mais</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                )
                }

            </Swiper>
        </section>
    )
}

export default HomeSlider
