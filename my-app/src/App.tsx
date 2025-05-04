import { FC } from 'react'
import NavBar from './components/AppBarComponent/NavBar';

const App:FC = () => {
  return (
    <div>
      <h2 className='text-3xl font-bold'>Build Car Detailing</h2>
      <NavBar />
    </div>
  )
}

export default App
