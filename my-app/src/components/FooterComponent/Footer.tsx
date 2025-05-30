import { useInView } from "react-intersection-observer";
import { FC } from "react";
import { Box, Fade, IconButton, Typography } from "@mui/material";
import {Phone, Email, WhatsApp, Facebook, Instagram} from '@mui/icons-material';
import { FaTiktok } from 'react-icons/fa';

const Footer:FC = () => {

    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    
    return (

        <Fade in={inView} timeout={1000}>
                <Box
                    ref={ref}
                    component="footer"
                    className="bg-black text-white"
                    sx={{
                        backgroundColor: '#000',
                        py: 5,
                        px: {xs: 2, md: 6},
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent:'space-between',
                        alignItems:'center',
                        rowGap: 3,
                    }}
                >
                    {/* contact info */}

                    <Box className="text-center md:text-left text-gray-300">
                        <Typography variant="h6" gutterBottom>
                            Contact Us
                        </Typography>
                        <Typography sx={{display: 'flex', alignItems:'center'}}>
                            <Phone fontSize="small" sx={{mr: 1}} />
                            +64 22 464 3410
                        </Typography>
                        <Typography sx={{display: 'flex', alignItems:'center'}}>
                            <Email fontSize="small" sx={{mr: 1}} />
                            reviveautodetailingnz@gmail.com
                        </Typography>
                        <Typography>35, FarWood Drive, Henderson, Auckland, New Zealand</Typography>
                    </Box>
                

                {/* Social Icons with animation */}
            <Box className="flex gap-4 mt-4 md:mt-0">
                {[
                    {
                        label: 'WhatsApp',
                        href: ' https://wa.me/64224643410',
                        color: '#25D366',
                        icon: <WhatsApp />,
                    },
                    {
                        label:'Facebook',
                        href: 'https://www.facebook.com/share/1Beb2TwnBw/',
                        color: '#1877F2',
                        icon: <Facebook />,
                    },
                
                    {
                        label: 'Instagram',
                        href: 'https://www.instagram.com/reviveautodetailingnz?igsh=amFxMWFnbDBvYzNs',
                        color: '#E1306C',
                        icon: <Instagram />

                    },

                    {
                        label: 'TikTok',
                        href: 'https://www.tiktok.com/@reviveautodetailing12?_t=ZS-8wRytWVO0nv&_r=1',
                        color: '#010101', // TikTok black
                        icon: <FaTiktok size={24} color="white" />,
                    },

                ].map(({label, href, color, icon}) => (
                    <IconButton
                        key={label}
                        component="a"
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        sx={{
                            backgroundColor: '#1e1e1e',
                            color,
                            borderRadius: '50%',
                            transition: 'transform 0.3s ease',
                            '&:hover':{
                                transform: 'scale(1.3)',
                            },
                        }}
                    >
                        {icon}
                    </IconButton>
                ))}
            </Box>
            <Typography
                variant="body2"
                className="text-gray-500 text-center md:text-right"
                sx={{width: '100%'}}
            >
                &copy; {new Date().getFullYear()} Rivive Auto Detailing. All rights reserved.
            </Typography>
            </Box>
        </Fade>

    );

}

export default Footer;