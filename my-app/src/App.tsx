import { FC, useEffect } from 'react'
import NavBar from './components/AppBarComponent/NavBar';
// import BannerImage from './components/BannerComponent';
import AboutUsComponent from './components/AboutUsComponent';
import ServicesComponent from './components/ServicesComponent';
import Footer from './components/FooterComponent';
import CustomerReviews from './components/CustomerReviewsComponent';

const App:FC = () => {

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'auto'});
    document.activeElement instanceof HTMLElement && document.activeElement.blur();

    if ('scrollRestoration' in window.history){
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
   <>
      <NavBar />
      {/* <section>
        <BannerImage />
      </section> */}
      <section id='home-section'>
        <AboutUsComponent />
      </section>
      <section id='services-section'>
        <ServicesComponent />
      </section>
      <section id='customer-reviews'>
        <CustomerReviews />
      </section>
      <section id='constact-section'>
        <Footer />
      </section>
    </>  
  )
}

export default App;
