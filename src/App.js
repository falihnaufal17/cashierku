import React, { Suspense } from 'react'
import './App.scss';
import Routes from './routes';

function App() {
  return (
    <Suspense fallback="">
      <Routes />
    </Suspense>
  );
}

export default App;
