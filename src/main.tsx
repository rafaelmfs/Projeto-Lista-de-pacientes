import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { UsersProvider } from './Contexts/UsersProvider';
import { Patients } from './Pages/Patients';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UsersProvider>
        <Routes>
          <Route path="/" element={<Patients />} />
        </Routes>
      </UsersProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
