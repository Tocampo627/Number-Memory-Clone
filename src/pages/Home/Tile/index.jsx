/* Style */
import './tile.css';

/* Node Modules */
import React from 'react';
import PropTypes from 'prop-types';

/* Component */
export const Tile = (props) => {
  return (
    <div className="tile">
      {props.icon && <div>{props.icon}</div>}
      <div>
        <p className="title">{props.title}</p>
        <p className="desc">{props.desc}</p>
      </div>
    </div>
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
};
