import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import Navbar from './components/navbar/navbar';
import DashBoard from './views/dashboard/dashboard';
import Settings from './views/settings/settings';
import SignUp from './views/signup/signup';
import { AuthContextProvider } from './contexts/authContext';
import LogIn from './views/login/login';
import ProtectedRoute from './contexts/protectedRoute';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <AuthContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={ 
            <ProtectedRoute>
              <DashBoard /> 
            </ProtectedRoute>
          } />
          <Route path='/settings' element={ <Settings /> } />
          <Route path='/signup' element={ <SignUp /> } />
          <Route path='/login' element={ <LogIn /> } />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  </>
);