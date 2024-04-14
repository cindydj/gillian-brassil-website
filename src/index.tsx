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
        margin: 0,
    },
    // h4 is used for subtitles in the Experience page.
    // The size is slightly smaller than the default text size.
    h4: {
        fontFamily: THEME.fonts.text,
        fontSize: '1.3rem',
        fontWeight: 'normal',
        margin: '0.5rem 0 0 0',
    },
    // h5 is used for displaying dates in the timeline.
    h5: {
        fontFamily: THEME.fonts.text,
        fontSize: '1.3rem',
        fontWeight: 'normal',
        color: THEME.colors.neutral.grey_4,
        margin: 0,
    },
    /**
     * Media queries to adjust font sizes for different screen sizes.
     * NOTE: This should match the value of the textSize breakpoint in theme.ts.
     */
    '@media screen and (max-width: 700px)': {
        body: {
            fontSize: '1.2rem',
        },
        h3: {
            fontSize: '2rem',
        },
        h4: {
            fontSize: '1.1rem',
        },
        h5: {
            fontSize: '0.9rem',
        },
    },
});

const router = createBrowserRouter([
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
