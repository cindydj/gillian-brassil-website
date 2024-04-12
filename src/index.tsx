/** @jsxImportSource @emotion/react */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/Error/ErrorPage';
import HomePage from './pages/Home/HomePage';
import { css, Global, ThemeProvider } from '@emotion/react';
import { THEME } from './theme';
import AboutPage from './pages/About/AboutPage';
import ContactPage from './pages/Contact/ContactPage';
import ExperiencePage from './pages/Experience/ExperiencePage';

const CSS_GLOBAL_TEXT_STYLES = css({
    body: {
        margin: 0,
        fontFamily: `${THEME.fonts.text}, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
        fontSize: '1.6rem',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        backgroundColor: THEME.colors.background.general,
        color: THEME.colors.text.dark,
    },
    code: {
        fontFamily:
            "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
    },
    // h1 and h2 are reserved for the banner typography.
    h1: {
        fontFamily: THEME.fonts.header,
        fontSize: '5rem',
        fontWeight: 'bold',
        margin: 0,
    },
    h2: {
        fontFamily: THEME.fonts.header,
        fontSize: '2.5rem',
        fontStyle: 'italic',
        fontWeight: 500,
        margin: 0,
    },
    // h3 is used for titles in the page content.
    h3: {
        color: THEME.colors.text.header,
        fontFamily: THEME.fonts.text,
        fontSize: '3.5rem',
        fontWeight: 'bold',
        margin: '0',
    },
});

const router = createBrowserRouter([
    {
        path: '/admin',
        lazy: () => import('./admin/CMS'),
    },
    {
        path: '/about',
        element: <AboutPage />,
    },
    {
        path: '/experience',
        element: <ExperiencePage />,
    },
    {
        path: '/contact',
        element: <ContactPage />,
    },
    {
        path: '/',
        element: <HomePage />,
        errorElement: <ErrorPage />,
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
