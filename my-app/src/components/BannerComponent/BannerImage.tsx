import { FC } from 'react'
import { Box } from '@mui/material'

const BannerImage:FC = () => {
  return (
    <div>
      <Box
        className="w-full"
        sx={{
          height: { xs: '200px', sm: '300px', md: '400px', lg: '500px' },
          backgroundImage: "url('/src/assets/banner-image-cardetailing.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}  
      />
      
    </div>
  )
}

export default BannerImage;
