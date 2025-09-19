"use client";

import React from 'react';
import {createTheme, CssBaseline, ThemeProvider} from '@mui/material';
import darkTheme from "@/app/theme/darkTheme";
import lightTheme from "@/app/theme/lightTheme";
import {ColorModeContext} from "@/app/colorModeContext";

export default function RootLayout({ children, }: {
    children: React.ReactNode;
}) {
    const [mode, setMode] = React.useState<'light' | 'dark'>('dark');

    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
            mode,
        }),
        []
    );

    const darkThemeChosen = React.useMemo(
        () => createTheme({ ...darkTheme }),
        [] // Remove mode dependency since darkTheme doesn't change
    );

    const lightThemeChosen = React.useMemo(
        () => createTheme({ ...lightTheme }),
        [] // Remove mode dependency since lightTheme doesn't change
    );

    return (
        <html lang="en">
        <body>
        <ColorModeContext value={colorMode}>
            <ThemeProvider theme={mode === 'dark' ? darkThemeChosen : lightThemeChosen} >
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ColorModeContext>
        </body>
        </html>
    );
}