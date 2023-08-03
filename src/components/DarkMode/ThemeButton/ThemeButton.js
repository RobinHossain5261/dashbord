"use client"
import { useTheme } from 'next-themes';
import React from 'react';
import { useState, useEffect } from 'react';

const ThemeButton = () => {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);


    useEffect(() => {
        setMounted(true)
    }, []);

    if (!mounted) {
        return null
    }

    return (
        <button
            aria-label='Toggle Dark Mode'
            className='flex items-center justify-center rounded-lg transition-colors '
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        >
            {resolvedTheme === 'dark' ? (
                <span className="material-symbols-outlined w-5 h-5">light_mode</span>
            ) : (
                <span className="material-symbols-outlined w-5 h-5">dark_mode</span>
            )}
        </button>
    );
};

export default ThemeButton;