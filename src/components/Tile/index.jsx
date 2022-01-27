/* Style */
import './tile.css';

/* Node Modules */
import React from 'react';
import PropTypes from 'prop-types';

/* Component */
export const Tile = (props) => {
  const tileSize = {
    sm: {
      height: '265px',
      width: '300px',
    },
    md: {
      height: '450px',
      width: '450px',
    },
  };

  const size = tileSize[props.size || 'md'];

  return (
    <div className={`tile ${props.className || ''}`} style={{ ...size }}>
      {props.title && <div className="tile-title">{props.title}</div>}
      <div className="tile-content">{props.content}</div>
    </div>
  );
};

Tile.propTypes = {
  /**
   * Title of the Tile
   */
  title: PropTypes.string,
  /**
   * Main content of tile
   */
  content: PropTypes.element.isRequired,
  /**
   * Size of tile
   */
  size: PropTypes.oneOf(['sm', 'md']),
  className: PropTypes.string,
};
