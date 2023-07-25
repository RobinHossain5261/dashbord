"use client"
import { ThemeProvider } from 'next-themes';
import React from 'react';

const Provider = ({children}) => {
    return (
        <ThemeProvider attribute="class" defaultTheme='light' enableSystem='false'>
            {children}
        </ThemeProvider>
    );
};

export default Provider;