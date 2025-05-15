import { FC } from 'react'
import NavBar from './components/AppBarComponent/NavBar';
import BannerImage from './components/BannerComponent';
import AboutUsComponent from './components/AboutUsComponent';
import ServicesComponent from './components/ServicesComponent';

const App:FC = () => {
  return (
    <div>
      <NavBar />
      <BannerImage />
      <AboutUsComponent /><br /><br />
      <ServicesComponent />
    </div>
  )
}

export default App;
