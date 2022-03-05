import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  console.log('App Start');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>It Works</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
