import Image from 'next/image'
import styles from './page.module.css'
import CategoriesSwiper from './../components/UI/CategoriesSwiper/CategoriesSwiper';
import HomeSlider from './../components/HomeSlider/HomeSlider';

export default function Home() {
  return (
    <main className={styles.main}>
      <CategoriesSwiper />
      <HomeSlider/>
    </main>
  )
}
