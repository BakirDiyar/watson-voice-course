import React from 'react';
import PropTypes from 'prop-types';

/* UI Components */
import {
  Toolbar,
  ToolbarRow,
  ToolbarSection,
  ToolbarTitle,
} from './ui';

const Navbar = ({ children }) => (
  <Toolbar>
    <ToolbarRow>
      <ToolbarSection>
        <ToolbarTitle>
          {children}
        </ToolbarTitle>
      </ToolbarSection>
    </ToolbarRow>
  </Toolbar>
);

Navbar.propTypes = {
  children: PropTypes.node,
};

export default Navbar;
