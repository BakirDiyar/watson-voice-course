import React from 'react';

/* Material Components Framework
 * https://material.io/components/web/ */
import 'material-components-web/dist/material-components-web.css';

import Navbar from './Navbar';

const App = () => (
  <div>
    <Navbar>
      Watson Voice Recognition
    </Navbar>

    <div className="mdc-layout-grid">
      <button className="mdc-button">
        <i className="material-icons mdc-button__icon">favorite</i>
        Escuchar micrófono
      </button>
    </div>
  </div>
);

export default App;
