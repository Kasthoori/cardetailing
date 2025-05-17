import { FC } from 'react'
import NavBar from './components/AppBarComponent/NavBar';
import BannerImage from './components/BannerComponent';
import AboutUsComponent from './components/AboutUsComponent';
import ServicesComponent from './components/ServicesComponent';

const App:FC = () => {
  return (
    <main className='pt-0'>
      <NavBar />
      <section>
        <BannerImage />
      </section>
      <section id='home-section'>
        <AboutUsComponent />
      </section>
      <section id='services-section'>
        <ServicesComponent />
      </section>
      
      
    </main>
  )
}

export default App;
