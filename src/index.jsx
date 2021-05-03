// @ts-check
import 'core-js/stable/index.js';
import 'regenerator-runtime/runtime.js';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App.jsx';
import { UserProvider } from './components/context/UserContext.jsx';
import './i18n';
import store from './app/store.js';
import '../assets/application.scss';
import SockenContext, { socket } from './components/context/SocketContext.js';

// @ts-ignore
if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}
render(
  <Provider store={store}>
    <SockenContext.Provider value={socket}>
      <UserProvider>
        <App />
      </UserProvider>
    </SockenContext.Provider>
  </Provider>, document.getElementById('chat'),
);
