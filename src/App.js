import React from 'react';
import './App.module.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../src/components/home/Home';
import Details from './components/details/Details';
import Layout from './Layout';

function App() {
    return (
      <>
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='details/:id' element={<Details />} />
          </Route>
        </Routes>
          
        </BrowserRouter>
      </>

    )
}

export default App;
