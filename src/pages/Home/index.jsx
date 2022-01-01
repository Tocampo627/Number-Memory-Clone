import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Tile } from './Tile';
import { NumberMemoryIcon } from '../../components/Icons/NumberMemoryIcon';

export const Home = () => {
  return (
    <section>
      <Tile
        icon={<NumberMemoryIcon />}
        title="Number Memory"
        desc="Remember the longest number you can."
      />
    </section>
  );
};
