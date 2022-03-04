import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../src/components/home/Home';
import Details from './components/details/Details';
import Layout from './Layout';

function App() {
    return (
      <div className='container pr-0 pl-0'>
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='details/:id' element={<Details />} />
          </Route>
        </Routes>
          
        </BrowserRouter>
      </div>

    )
}

export default App;
