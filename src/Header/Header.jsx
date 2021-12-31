import React from 'react';
import './header.css';

export const Header = () => {
  return (
    <body>
      <div class="navbar">
        <a class="active" href="#">
          <b class="options"></b> HUMAN BENCHMARK
        </a>
        <a href="#">
          <i class="options"></i> DASHBOARD
        </a>
      </div>
    </body>
  );
};
