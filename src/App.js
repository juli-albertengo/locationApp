import React from 'react';
import {Provider} from 'react-redux';
import Navigator from './navigation/index';
import store from './store';
import {init} from './db';

init()
  .then(() => {
    console.log('DB initialized');
  })
  .catch(err => {
    console.log('DB initialization failed', err);
  });

const App = () => {
  return (
    <Provider store={store}>
      <Navigator/>
    </Provider>
  );
};

export default App;
