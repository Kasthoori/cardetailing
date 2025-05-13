import { FC } from 'react'
import NavBar from './components/AppBarComponent/NavBar';
import BannerImage from './components/BannerComponent';

const App:FC = () => {
  return (
    <div>
      <NavBar />
      <BannerImage />
    </div>
  )
}

export default App
