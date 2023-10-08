import styles from './page.module.css'
import CategoriesSwiper from './../components/UI/CategoriesSwiper/CategoriesSwiper';
import HomeSlider from './../components/HomeSlider/HomeSlider';
import Timer from '@/components/UI/Timer/Timer';
import ProductSlider from './../components/UI/ProductsSlider/ProductSlider';

export default function Home() {
  return (
    <main className={styles.main}>
      <CategoriesSwiper />
      <HomeSlider />
      <Timer deadlineInDays={2} />
      <ProductSlider category='all' />
      <ProductSlider category='electronics' />
      <ProductSlider category='jewelery' />
    </main>
  )
}
