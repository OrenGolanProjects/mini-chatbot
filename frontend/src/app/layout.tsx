"use client";

import React from 'react';
import {createTheme, CssBaseline, ThemeProvider} from '@mui/material';
import darkTheme from "@/theme/darkTheme";
import lightTheme from "@/theme/lightTheme";
import {ColorModeContext} from "@/app/colorModeContext";
import Header from "@/components/layout/Header/Header";
import ChatLayout from "@/components/layout/ChatLayout/ChatLayout";
import scss from "./Home.module.scss";
import CustomButton from "@/components/ui/CustomButton/CustomButton";

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

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log('CustomButton clicked!', event);
    };

    return (
        <html lang="en">
            <body suppressHydrationWarning={true}>
                <ColorModeContext value={colorMode}>
                    <ThemeProvider theme={mode === 'dark' ? darkThemeChosen : lightThemeChosen} >
                        <CssBaseline />
                        <Header />
                        <ChatLayout />
                    </ThemeProvider>
                </ColorModeContext>
            </body>
        </html>
    );
}