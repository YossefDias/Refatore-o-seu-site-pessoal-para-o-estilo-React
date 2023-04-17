import React from 'react';
import './App.css';
import Header from './components/H/Header';
import Main from './components/S/Main';
import Portfolio from './components/Portfolio/Portfolio/Portfolio';
import Footer from './components/F/Footer';
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";

function App() {

  return (
<>
<Header></Header>

    <BrowserRouter>
    <nav>
        <ul>
            <li ClassName="button"> <Link to="/">Currículo</Link>
            <li ClassName="button"> <a href="Pages/portfolio.html">Portfólio</a></li>
            <li ClassName="button"> <a href="Pages/contato.html">Contato</a></li>
        </ul>
    </nav>
      <Routes>
         <Route index element={<Curriculo />} />
          <Route path="portfolio" element={<Portfolio />} />
          </Route>
      </Routes>
    </BrowserRouter>

<Footer></Footer>

</>
  )
}



export default App
