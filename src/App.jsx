/* eslint no-console: 0 */
import React, { Component } from 'react';
import axios from 'axios';
import recognizeMicrophone from 'watson-speech/speech-to-text/recognize-microphone';

/* Material Components Framework
 * https://material.io/components/web/ */
import 'material-components-web/dist/material-components-web.css';

import Navbar from './Navbar';

class App extends Component {
  constructor() {
    super();
    this.state = { text: '' };
    this.onListenClick = this.onListenClick.bind(this);
  }

  onListenClick() {
    axios.get('http://localhost:3002/api/speech-to-text/token')
      .then((res) => {
        const token = res.data;
        console.log(token);

        const stream = recognizeMicrophone({
          token,
          objectMode: true,
          extractResults: true,
          format: false,
        });

        stream.on('data', (data) => {
          this.setState({ text: data.alternatives[0].transcript });
        });

        stream.on('error', err => console.error(err));
      });
  }

  render() {
    return (
      <div>
        <Navbar>
          Watson Voice Recognition
        </Navbar>

        <div className="mdc-layout-grid">
          <button
            className="mdc-button mdc-button--raised"
            onClick={this.onListenClick}
          >
            <i className="material-icons mdc-button__icon mdc-button__raised">mic</i>
            Escuchar micrófono
          </button>
          <h1 className="mdc-typography--tite">
            {this.state.text}
          </h1>
        </div>
      </div>
    );
  }
}

export default App;
