/* Style */
import './game.css';

/* Node Modules */
import React, { useState } from 'react';
import { NumberMemoryIcon } from '../../components/Icons/NumberMemoryIcon';
import { Tile } from '../../components/Tile';
import { NumberMemory } from './NumberMemory';

/* Component */
export const GamePage = () => {
  const [isStarted, setIsStarted] = useState(false);
  return (
    <div className="game-container">
      <section className="game">
        <div className="game-content">
          {isStarted ? (
            <NumberMemory />
          ) : (
            <>
              <div>
                <NumberMemoryIcon />
              </div>

              <h1>Number Memory</h1>
              <p>
                The average person can remember 7 numbers at once. Can you do
                more?
              </p>
              <button
                className="start-button"
                onClick={() => setIsStarted(true)}
              >
                Start
              </button>
            </>
          )}
        </div>
      </section>
      <section className="info">
        <Tile title="Statistics" content={<div>Coming Soon</div>} />
        <Tile title="About the test" content={<div>Coming Soon</div>} />
      </section>
    </div>
  );
};
