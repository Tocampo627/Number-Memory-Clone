import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Tile } from './Tile';

export const Home = () => {
  return (
    <section>
      <Tile title="Number Memory" desc="Remember the longest number you can." />
    </section>
  );
};
