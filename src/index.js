import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Convert from './components/convert';
import { Provider } from 'react-redux';
import { store } from './store.js';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path="/convert" element={<Convert />} />

        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
