import './index.css';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Header } from './Header/Header';
import { Home } from './pages';

export const App = () => {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
};
