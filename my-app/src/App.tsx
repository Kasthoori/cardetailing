import { FC } from 'react'
import NavBar from './components/AppBarComponent/NavBar';
import BannerImage from './components/BannerComponent';
import AboutUsComponent from './components/AboutUsComponent';

const App:FC = () => {
  return (
    <div>
      <NavBar />
      <BannerImage />
      <AboutUsComponent />
    </div>
  )
}

export default App
