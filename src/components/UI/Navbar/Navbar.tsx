import Link from 'next/link';

import styles from './Navbar.module.scss'

interface Category {
    name: string;
    slug: string;
}

const Navbar = () => {

    const categories: Category[] = [
        { name: 'Todas categorias', slug: 'todas-categorias' },
        { name: 'Acessórios', slug: 'acessorios' },
        { name: 'Bolsas', slug: 'bolsas' },
        { name: 'Calçados', slug: 'calcados' },
        { name: 'Roupas', slug: 'roupas' }
    ]

    return (
        <ul className={`${styles.navbar} d-none d-lg-flex`}>
            {categories.map((category, index) => (
                <li key={index} className={`${styles.navbarItem}`}>
                    <Link href={`categories/${category.slug}`} className={`${styles.navBarLink}`}>{category.name}</Link>
                </li>

            ))}
        </ul>
    )
}

export default Navbar