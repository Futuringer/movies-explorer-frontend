import React from 'react';
import { ROUTES } from './routes';
import { useRoutes } from 'react-router-dom';
import './App.css';

function App() {
  const routes = useRoutes(ROUTES);

  return <>{routes}</>;
}

export default App;
