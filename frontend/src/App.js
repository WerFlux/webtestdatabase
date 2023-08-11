import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import NewLaptopPage from './components/NewLaptopPage'
import RemoveLaptopPage from './components/RemoveLaptopPage'
import FindLaptopPage from './components/FindLaptopPage'
import NotFoundPage from './components/NotFoundPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />}/>
		    <Route path="/add_new_laptop" element={<NewLaptopPage/>}/>
        <Route path="/remove_laptop" element={<RemoveLaptopPage/>}/>
        <Route path="/find_laptop" element={<FindLaptopPage/>}/>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
