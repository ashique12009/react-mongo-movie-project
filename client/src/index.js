import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createRoot } from 'react-dom/client';
import DataProvider from './components/context/DataProvider';

const rootElement = document.getElementById('root');

const root = createRoot(rootElement);

root.render(
    // <React.StrictMode>
        <DataProvider>
            <App />
        </DataProvider>
    // </React.StrictMode>
);