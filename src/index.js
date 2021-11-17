import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// импортируем пользовательский компонент, слово можно менять
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); // ссылка на элемент, в котором мы хотим отобразить реакт-компонент
// StrictMode нужно для разработки, не продакшена
// <App/> это JSX. позволяет смешивать JavaScript код и теги.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
