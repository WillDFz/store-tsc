import React from 'react'

import styles from './Sidebar.module.scss'
import Link from 'next/link'
import Image from 'next/image';
import Hamburger from 'hamburger-react';

interface SidebarProps {
    sidebar: boolean;
    setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebar, setSidebar }) => {
    return (
        <div className={`${styles.sidebar}`}>
            <div className='position-absolute'>
                <Hamburger size={20} toggled={sidebar} toggle={setSidebar} />
            </div>
            <div className='text-center border-bottom py-4'>
                <Image src="/images/logo-typo.png" alt="logo" width={100} height={30} />
            </div>
            <div className='d-flex flex-column'>
                <Link href="" className={`${styles.sidebarItem}`}><Image src="/svg/home.svg" className='me-2' alt='Home' width={24} height={24}></Image>Home</Link>
                <Link href="" className={`${styles.sidebarItem}`}><Image src="/svg/list.svg" className='me-2' alt='Categorias' width={24} height={24}></Image>Categorias</Link>
                <Link href="" className={`${styles.sidebarItem}`}><Image src="/svg/heart.svg" className='me-2' alt='Favoritos' width={24} height={24}></Image>Favoritos</Link>
                <Link href="" className={`${styles.sidebarItem}`}><Image src="/svg/box.svg" className='me-2' alt='Meus pedidos' width={24} height={24}></Image>Meus pedidos</Link>
                <Link href="" className={`${styles.sidebarItem}`}><Image src="/svg/headphone.svg" className='me-2' alt='Contato' width={24} height={24}></Image>Contato</Link>
            </div>

        </div>
    )
}

export default Sidebar
