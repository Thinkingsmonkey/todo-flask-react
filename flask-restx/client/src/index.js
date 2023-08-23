import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> {/* 將這個 component 渲染到 root 上，root 設定為 id='root' */}
  </React.StrictMode>
);
