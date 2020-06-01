import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import GlobalStyle from './styles/global';

import './config/ReactrotonConfig';
import store from './store';

import Routes from './routes';
import history from './services/history';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <GlobalStyle />
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
