import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Pages/Home';
import { Favorites } from './components/Pages/Favorites';
import { PureChase } from './components/Pages/PureChase';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="pureChase" element={<PureChase />} />
      </Route>
    </Routes>
  );
}

export default App;
