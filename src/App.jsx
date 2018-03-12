import React from 'react';

/* Material Components Framework
 * https://material.io/components/web/ */
import 'material-components-web/dist/material-components-web.css';

/* Default App styles and images */
import './App.css';

const App = () => (
  <div>
    <header className="mdc-toolbar">
      <div className="mdc-toolbar__row">
        <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
          <span className="mdc-toolbar__title">Welcome to React</span>
        </section>
      </div>
    </header>

    <div className="mdc-layout-grid">
      <h2 className="mdc-typography--title">
        To get started, edit <code>src/App.js</code> and save to reload.
      </h2>
    </div>
  </div>
);

export default App;
