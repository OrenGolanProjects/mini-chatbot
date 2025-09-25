"use client";

import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import CustomButton from '@/components/ui/CustomButton/CustomButton';
import scss from './Home.module.scss';

export default function HomePage() {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log('HomePage CustomButton clicked!', event);
    };

    return (
        <Container maxWidth="lg" className={scss.homeContainer}>
            <Box className={scss.heroSection}>
                <Typography variant="h1" component="h1" className={scss.title}>
                    Welcome to Your App
                </Typography>
                <Typography variant="h5" component="p" className={scss.subtitle}>
                    Your Next.js application with Material-UI and custom theming
                </Typography>
                <Box className={scss.buttonContainer}>
                    <CustomButton 
                        onClick={handleClick}
                        variant="contained"
                        size="large"
                    >
                        Get Started
                    </CustomButton>
                </Box>
            </Box>
        </Container>
    );
}