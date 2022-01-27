/* Style */
import './gameTile.css';

/* Node Modules */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Tile } from '../Tile';

/* Component */
export const GameTile = (props) => {
  return (
    <Link to={props.path}>
      <Tile
        className="gameTile"
        size="sm"
        content={
          <>
            {props.icon && <div>{props.icon}</div>}
            <div>
              <p className="title">{props.title}</p>
              <p className="desc">{props.desc}</p>
            </div>
          </>
        }
      />
    </Link>
  );
};

GameTile.propTypes = {
  /**
   * Description of Game
   */
  desc: PropTypes.string.isRequired,
  icon: PropTypes.any,
  /**
   * Title of the Game
   */
  title: PropTypes.string.isRequired,
  /**
   * route path to Game
   */
  path: PropTypes.string.isRequired,
};
