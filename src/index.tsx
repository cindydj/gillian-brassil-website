import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import { ThemeProvider } from '@emotion/react';
import { THEME } from './theme';

const router = createBrowserRouter([
    {
        path: '/admin',
        lazy: () => import('./admin/CMS'),
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
        <ThemeProvider theme={THEME}>
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>,
);
