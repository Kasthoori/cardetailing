import { FC } from 'react'
import { Box } from '@mui/material'
import { theme } from './BannerImage.styles'

const BannerImage:FC = () => {
  return (
    <div>
      <Box
        className="w-full"
        sx={{
          height: { xs: '300px', sm: '400px', md: '500px', lg: '600px' },
          backgroundImage: "url('/src/assets/banner-image-cardetailing.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}  
      />

      {/* Overlaytext */}

      <Box sx={{fontFamily: theme.fontPoppins, color: theme.color}} className="absolute top-20 md:top-22 lg:top-24 left-1/2 -translate-x-1/2 text-white text-lg sm:text-xl md:text-3xl lg:text-5xl font-bold text-center drop-shadow-md">
        Car Luxury Restored
      </Box>
      
    </div>
  )
}

export default BannerImage;
