import { FC } from 'react'
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material'
import { keyframes } from '@emotion/react'

// Depth-to-front fade-in animation
const depthFadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8) translateY(40px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`

const BannerImage: FC = () => {
  const theme = useTheme()

  const isXs = useMediaQuery(theme.breakpoints.only('xs'))
  const isSm = useMediaQuery(theme.breakpoints.only('sm'))
  const isMd = useMediaQuery(theme.breakpoints.only('md'))

  const getFontSize = () => {
    if (isXs) return '1.8rem'
    if (isSm) return '2.2rem'
    if (isMd) return '2.8rem'
    return '3.5rem'
  }

  return (
    <Box
      position="relative"
      className="w-full"
      sx={{
        height: { xs: '300px', sm: '400px', md: '500px', lg: '600px' },
        backgroundImage: "url('/src/assets/banner-image-cardetailing.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        transition: 'transform 3s ease',
        '&:hover': {
          transform: 'scale(1.03)',
        },
      }}
    >
      {/* Dark overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        }}
      />

      {/* Enhanced animated text */}
      <Typography
        variant="h2"
        sx={{
          color: 'white',
          fontWeight: 700,
          textShadow: '2px 2px 10px rgba(0, 0, 0, 0.8)',
          zIndex: 2,
          textAlign: 'center',
          px: 2,
          fontSize: getFontSize(),
          animation: `${depthFadeIn} 1.5s ease-out`,
        }}
      >
        Car Luxury Restored
      </Typography>
    </Box>
  )
}

export default BannerImage
