import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RoutineContextProvider } from './context/routinecontext';
import { SignContextProvider } from './context/signcontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SignContextProvider>
      <RoutineContextProvider>
        <App />
      </RoutineContextProvider>
    </SignContextProvider>
  </React.StrictMode>
);
