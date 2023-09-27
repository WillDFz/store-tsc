import Image from 'next/image'
import styles from './page.module.css'
import CategoriesSwiper from './../components/UI/CategoriesSwiper/CategoriesSwiper';

export default function Home() {
  return (
    <main className={styles.main}>
      <CategoriesSwiper />
    </main>
  )
}
