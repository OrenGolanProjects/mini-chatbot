"use client";

import React from 'react';
import {createTheme, CssBaseline, ThemeProvider} from '@mui/material';
import darkTheme from "@/theme/darkTheme";
import lightTheme from "@/theme/lightTheme";
import {ColorModeContext} from "@/app/colorModeContext";
import Header from "@/components/layout/Header/Header";
import ChatLayout from "@/components/layout/ChatLayout/ChatLayout";

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
        [mode]
    );

    const lightThemeChosen = React.useMemo(
        () => createTheme({ ...lightTheme }),
        [mode]
    );

    return (
        <html lang="en">
            <body suppressHydrationWarning={true}>
                <ColorModeContext value={colorMode}>
                    <ThemeProvider theme={mode === 'dark' ? darkThemeChosen : lightThemeChosen} >
                        <CssBaseline />
                        <Header />
                        <ChatLayout />
                        {children}
                    </ThemeProvider>
                </ColorModeContext>
            </body>
        </html>
    );
}