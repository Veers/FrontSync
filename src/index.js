import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux';
// import './index.css';
import configureStore from './js/configureStore';
import App from './js/App';
// import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

const rootElement = <Provider store={configureStore()}><MuiThemeProvider><App/></MuiThemeProvider></Provider>

render((
	rootElement
), document.getElementById('root'));
// registerServiceWorker();