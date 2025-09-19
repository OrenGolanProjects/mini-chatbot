// app/page.tsx
'use client';

import React from 'react';
import { createTheme, CssBaseline, ThemeProvider, Button, Typography } from '@mui/material';
import darkTheme from '@/app/theme/darkTheme';
import lightTheme from '@/app/theme/lightTheme';
import {ColorModeContext} from "@/app/colorModeContext";


export default function Home() {
    const [mode, setMode] = React.useState<'light' | 'dark'>('dark');

    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        []
    );

    const theme = React.useMemo(
        () => createTheme(mode === 'dark' ? darkTheme : lightTheme),
        [mode]
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Typography variant="h6" gutterBottom>
                    Welcome to Mini Chatbot!!!
                </Typography>
                <Button
                    variant="contained"
                    onClick={colorMode.toggleColorMode}
                    sx={{ m: 2 }}
                >
                    Toggle to {mode === 'light' ? 'Dark' : 'Light'} Mode
                </Button>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}