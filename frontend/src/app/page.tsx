import * as React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function HomePage() {
    const theme = useTheme();

    return (
        <Container maxWidth="lg" sx={{ mt: 2, mb: 2 }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '60vh',
                    textAlign: 'center',
                }}
            >
                <Typography
                    variant="h3"
                    component="h1"
                    gutterBottom
                    sx={{
                        fontWeight: 'bold',
                        color: theme.palette.primary.main,
                        mb: 3
                    }}
                >
                    Welcome to Mini-Chatbot
                </Typography>

                <Typography
                    variant="h6"
                    component="p"
                    sx={{
                        color: theme.palette.text.secondary,
                        mb: 4,
                        maxWidth: '600px'
                    }}
                >
                    Start a conversation with our AI assistant. Ask questions, get help, or just have a chat!
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        color: theme.palette.text.secondary,
                        mb: 2
                    }}
                >
                    💬 Your chat interface is ready below
                </Typography>
            </Box>
        </Container>
    );
}