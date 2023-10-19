'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Link from 'next/link'

interface Category {
    name: string;
    slug: string;
}

const CategoriesSwiper: React.FC = () => {

    const categories: Category[] = [
        { name: 'Todas categorias', slug: 'todas-categorias' },
        { name: 'Acessórios', slug: 'acessorios' },
        { name: 'Bolsas', slug: 'bolsas' },
        { name: 'Calçados', slug: 'calcados' },
        { name: 'Roupas', slug: 'roupas' }
    ]

    return (
        <div className='container d-md-none pe-0 mb-3 my-lg-2'>
            <Swiper
                spaceBetween={3}
                slidesPerView={2.5}
            >
                {categories.map((category, index) => (

                    <SwiperSlide key={index}>
                        <Link href={`categories/${category.slug}`} className='custom-regular-badge w-100 d-block text-center'>
                            {category.name}
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default CategoriesSwiper
