import { React } from 'react'
import { BrowserRouter } from 'react-router-dom';
// import { ReactDOM } from 'react';
// import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App'


const container = document.getElementById('app');
const root = createRoot(container);
root.render(
<BrowserRouter>
    <App />
</BrowserRouter>
);

