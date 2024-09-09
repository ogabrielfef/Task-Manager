import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Login from './routes/Login';
import Tasks from './routes/Tasks'; 
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './contexts/authContext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/login" element={<Login />}/>
            <Route path="/tasks" element={<PrivateRoute><Tasks /></PrivateRoute>} />
          </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
