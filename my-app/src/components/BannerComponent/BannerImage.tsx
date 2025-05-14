import { FC } from 'react'
import { Box } from '@mui/material'
import { headerStyles } from './BannerImage.styles'

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

      <Box className={headerStyles}>
        Car Luxury Restored
      </Box>
      
    </div>
  )
}

export default BannerImage;
