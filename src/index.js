import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux';
// import './index.css';
import configureStore from './js/store/configureStore';
import App from './js/App';
// import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme()
const rootElement = <Provider store={configureStore()}><MuiThemeProvider theme={theme}><App/></MuiThemeProvider></Provider>

render((
	rootElement
), document.getElementById('root'));
// registerServiceWorker();