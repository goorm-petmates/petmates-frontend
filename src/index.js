import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//mswjs 사용시 주석해제하기
async function deferRender() {
  const { worker } = await import('./mocks/browser.js');
  return worker.start();
}

deferRender().then(() => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    // <React.StrictMode>
    <App />,
    // </React.StrictMode>,
  );
});

//실제 api연결시 주석해제하기
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   // <React.StrictMode>
//   <App />,
//   // </React.StrictMode>,
// );
