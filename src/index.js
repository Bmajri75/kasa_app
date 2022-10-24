import React, {StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import '../src/asset/styles/index.scss';
import {RouterProvider} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import { router } from './router/router';

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement);
root.render(
  <StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
