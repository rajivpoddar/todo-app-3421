import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import { TodoContextProvider } from './components/TodoContext';

ReactDOM.render(
  <React.StrictMode>
    <TodoContextProvider>
      <App />
    </TodoContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
