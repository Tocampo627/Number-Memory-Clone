import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Tile } from './Tile';

import { NumberMemoryIcon } from '../../components/Icons/NumberMemoryIcon';

export const Home = () => {
  return (
    <section style={{ padding: '20px 40px' }}>
      <Tile
        icon={<NumberMemoryIcon />}
        title="Number Memory"
        desc="Remember the longest number you can."
        path="/tests/number-memory"
      />
    </section>
  );
};
