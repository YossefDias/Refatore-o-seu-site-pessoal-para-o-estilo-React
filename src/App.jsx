import React from 'react';
import './App.css';
import Header from './components/H/Header';
import Main from './components/S/Main';
import Portfolio from './components/Portfolio/Portfolio/Portfolio';
import Footer from './components/F/Footer';
// import Contato from './components/Contato/Contato'
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";

function App() {
  return (
    <>
      <Header></Header>

      <BrowserRouter>
        <nav>
          <ul>
            <li className="button"> <Link to="/">Currículo</Link></li>
            <li className="button"> <Link to="portfolio">Portfólio</Link></li>
            <li className="button"> <Link to="contato">Contato</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>

      <Footer></Footer>
    </>
  );
}

export default App;
