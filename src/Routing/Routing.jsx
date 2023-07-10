import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { Home } from '../Components/pages/Home';
import { ToCreate } from '../Components/pages/ToCreate';
import { Header } from '../Components/layouts/Header';
import { NavBar } from '../Components/layouts/NavBar';
import { SideBar } from '../Components/layouts/SideBar';
import { Footer } from '../Components/layouts/Footer';
import { ToEdit } from '../Components/pages/ToEdit';
import { Articles } from '../Components/pages/Articles';
import { Search } from '../Components/pages/Search';
import { Article } from '../Components/pages/Article';

export const Routing = () => {
  return (
      <BrowserRouter>
      {/* Layout */}
        <Header/>
        <NavBar/>
      {/* Rutas */}
      <section className='content'>
           <Routes>
               <Route path='/' element={<Home/>}/>
               <Route path='/home' element={<Home/>}/>
               <Route path='/articles' element={<Articles/>}/>
               <Route path='/tocreate' element={<ToCreate/>}/>
               <Route path='/toedit/:id' element={<ToEdit/>}/>
               <Route path= '/search/:toSearch' element={<Search/>}/>
               <Route path= '/article/:id' element={<Article/>}/>
               <Route path='*' element={
                <div className='jumbo'>
                <h1>Error 404</h1>
                <p>Pagina no encontrada</p>
                </div>
                
               }/>

           </Routes>
      </section>
      <SideBar/>
      <Footer/>
      </BrowserRouter>
  );
}
