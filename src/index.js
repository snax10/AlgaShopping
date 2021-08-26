import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { HomeView } from './views/Home.view';
import { Provider } from 'react-redux';
import store from './store/store';


ReactDOM.render(
  <Provider store={store}>
    <HomeView />
  </Provider>,
  document.getElementById('root')
);

