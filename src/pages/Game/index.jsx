/* Style */
import './index.css';

/* Node Modules */
import { NumberMemoryIcon } from '../../components/Icons/NumberMemoryIcon';
import { NumMemory } from './NumberMemory';
import React, { useState } from 'react';

/* Component */
export const Game = () => {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <div className="container">
      <section className="game">
        <div className="game-content">
          {isStarted ? (
            <NumMemory />
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
      <section className="info" style={{ width: '994px' }}>
        <div className="add"></div>
        <div className="tile-holder">
          <div className="info-tile">
            <p className="info-title"> Coming Soon! </p>
          </div>
          <div className="other-info-tile">
            <p className="other-info-title"> Coming Soon! </p>
          </div>
        </div>
      </section>
    </div>
  );
};
