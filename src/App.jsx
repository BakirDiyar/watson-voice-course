import React from 'react';

/* Material Components Framework
 * https://material.io/components/web/ */
import 'material-components-web/dist/material-components-web.css';

/* UI Components */
import {
  Toolbar,
  ToolbarRow,
  ToolbarSection,
  ToolbarTitle,
} from './ui';

const App = () => (
  <div>
    <Toolbar>
      <ToolbarRow>
        <ToolbarSection>
          <ToolbarTitle>
            Welcome to React
          </ToolbarTitle>
        </ToolbarSection>
      </ToolbarRow>
    </Toolbar>

    <div className="mdc-layout-grid">
      <h2 className="mdc-typography--title">
        To get started, edit <code>src/App.js</code> and save to reload.
      </h2>
    </div>
  </div>
);

export default App;
