import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './Store/Store.js'; // Імпортуємо Store, який ми створили

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Обгортка Provider надає доступ до Store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// Для вимірювання продуктивності
reportWebVitals();
