"use client"
import { useTheme } from 'next-themes';
import React from 'react';
import { useState, useEffect } from 'react';

const ThemeButton = () => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();


    useEffect(() => {
        setMounted(true)
    }, []);

    if (!mounted) {
        return null
    }

    return (
        <button
            aria-label='Toggle Dark Mode'           
            className='flex items-center justify-center rounded-lg p-2 transition-colors '
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        >
            {resolvedTheme === 'dark' ? (
                <span class="material-symbols-outlined w-5 h-5">light_mode</span>
            ) : (
                <span class="material-symbols-outlined w-5 h-5">dark_mode</span>
            )}
        </button>
    );
};

export default ThemeButton;