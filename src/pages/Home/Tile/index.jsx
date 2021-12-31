/* Style */
import './tile.css';

/* Node Modules */
import React from 'react';
import PropTypes from 'prop-types';

/* Component */
export const Tile = (props) => {
  return (
    <div className="tile">
      <p className="title">{props.title}</p>
      <p className="desc">{props.desc}</p>
    </div>
  );
};

Tile.propTypes = {
  /**
   * Title of the Tile
   */
  title: PropTypes.string.isRequired,
  /**
   * Description of Tile
   */
  desc: PropTypes.string.isRequired,
};
