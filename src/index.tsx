/** @jsxImportSource @emotion/react */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/Error/ErrorPage';
import HomePage from './pages/Home/HomePage';
import { css, Global, ThemeProvider } from '@emotion/react';
import { THEME } from './theme';
import AboutPage from './pages/About/AboutPage';
import ContactPage from './pages/Contact/ContactPage';
import ExperiencePage from './pages/Experience/ExperiencePage';
import { createInternalUrl } from './utils/router';

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
    // title is used for displaying Gillian's name on the home page mobile version.
    title: {
        display: 'block',
        fontFamily: THEME.fonts.text,
        fontSize: '3.8rem',
        fontWeight: 'bold',
        color: THEME.colors.primary,
    },
    // h1 is used for titles in the page content.
    h1: {
        color: THEME.colors.text.header,
        fontFamily: THEME.fonts.text,
        fontSize: '3.5rem',
        fontWeight: 'bold',
        margin: 0,
    },
    // h2 is used for subtitles. The size is slightly smaller than the default text size.
    h2: {
        fontFamily: THEME.fonts.text,
        fontSize: '1.3rem',
        fontWeight: 'normal',
        margin: '0.5rem 0 0 0',
    },
    /**
     * Media queries to adjust font sizes for different screen sizes.
     * NOTE: This should match the value of the textAndImageSize breakpoint in theme.ts.
     */
    '@media screen and (max-width: 700px)': {
        body: {
            fontSize: '1.2rem',
        },
        h1: {
            fontSize: '2rem',
        },
        h2: {
            fontSize: '1.1rem',
        },
    },
});

const router = createHashRouter([
    {
        path: createInternalUrl('/admin'),
        lazy: () => import('./admin/CMS'),
    },
    {
        path: createInternalUrl('/about'),
        element: <AboutPage />,
    },
    {
        path: createInternalUrl('/experience'),
        element: <ExperiencePage />,
    },
    {
        path: createInternalUrl('/contact'),
        element: <ContactPage />,
    },
    {
        path: createInternalUrl('/'),
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
