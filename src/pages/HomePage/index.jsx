import React from 'react';

import { GameTile } from '../../components/GameTile';
import { NumberMemoryIcon } from '../../components/Icons/NumberMemoryIcon';

export const HomePage = () => {
  return (
    <section style={{ padding: '20px 40px' }}>
      <GameTile
        icon={<NumberMemoryIcon />}
        title="Number Memory"
        desc="Remember the longest number you can."
        path="/tests/number-memory"
      />
    </section>
  );
};
