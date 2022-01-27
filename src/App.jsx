import './index.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './NavBar';
import { HomePage, GamePage } from './pages';

export const App = () => {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tests/number-memory" element={<GamePage />} />
        </Routes>
      </main>
    </>
  );
};
