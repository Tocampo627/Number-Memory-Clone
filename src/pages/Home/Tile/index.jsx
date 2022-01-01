/* Style */
import './tile.css';

/* Node Modules */
import React from 'react';
import PropTypes from 'prop-types';
import { Routes, Route, Link } from 'react-router-dom';

/* Component */
export const Tile = (props) => {
  return (
    <Link to={props.path}>
      <div className="tile">
        {props.icon && <div>{props.icon}</div>}
        <div>
          <p className="title">{props.title}</p>
          <p className="desc">{props.desc}</p>
        </div>
      </div>
    </Link>
  );
};

Tile.propTypes = {
  /**
   * Description of Tile
   */
  desc: PropTypes.string.isRequired,
  icon: PropTypes.any,
  /**
   * Title of the Tile
   */
  title: PropTypes.string.isRequired,
  /**
   * path
   */
  path: PropTypes.string.isRequired,
};
