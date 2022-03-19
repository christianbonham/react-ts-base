import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PageFramework from './components/PageFramework';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageFramework />}>
          <Route index element={<h1>It Works</h1>} />
          <Route path="*" element={<h2>404 Not Found</h2>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
