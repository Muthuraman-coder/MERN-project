import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RoutineContextProvider } from './context/routinecontext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RoutineContextProvider>
      <App />
    </RoutineContextProvider>
  </React.StrictMode>
);
