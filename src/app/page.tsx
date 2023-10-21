import styles from './page.module.css'
import CategoriesSwiper from './../components/UI/CategoriesSwiper/CategoriesSwiper';
import HomeSlider from './../components/HomeSlider/HomeSlider';
import Timer from '@/components/UI/Timer/Timer';
import ProductSlider from './../components/UI/ProductsSlider/ProductSlider';
import Banner from './../components/UI/Banner/Banner';
import Footer from './../components/UI/Footer/Footer';

export default function Home() {
  return (
    <main className={styles.main}>
      <CategoriesSwiper />
      <HomeSlider />
      <Timer screen="desktop" deadlineInDays={2} />
      <ProductSlider category='all' />
      <Banner banner="banner-02" /> 
      <ProductSlider category='electronics' />
      <ProductSlider category='jewelery' />
    </main>
  )
}
