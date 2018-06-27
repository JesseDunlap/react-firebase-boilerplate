import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer as App } from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
