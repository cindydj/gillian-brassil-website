/** @jsxImportSource @emotion/react */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import { css, Global, ThemeProvider } from '@emotion/react';
import { THEME } from './theme';

const CSS_GLOBAL_TEXT_STYLES = css({
    body: {
        margin: 0,
        fontFamily:
            "'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
        fontSize: '1.6rem',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        color: THEME.colors.text.dark,
    },
    code: {
        fontFamily:
            "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
    },
    // h1 and h2 are reserved for the banner typography.
    h1: {
        fontFamily: 'Spectral',
        fontSize: '5rem',
        fontWeight: 'bold',
        margin: 0,
    },
    h2: {
        fontFamily: 'Spectral',
        fontSize: '2.5rem',
        fontStyle: 'italic',
        fontWeight: 500,
        margin: 0,
    },
});

const router = createBrowserRouter([
    {
        path: '/admin',
        lazy: () => import('./admin/CMS'),
    },
    {
        path: '/about',
        element: <HomePage />,
    },
    {
        path: '/work',
        element: <HomePage />,
    },
    {
        path: '/contact',
        element: <HomePage />,
    },
    {
        path: '/',
        element: <HomePage />,
    },
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);

root.render(
    <React.StrictMode>
        <Global styles={CSS_GLOBAL_TEXT_STYLES} />
        <ThemeProvider theme={THEME}>
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>,
);
