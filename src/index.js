import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './pages/HomePage/Home.jsx';
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { BeneficiosPage } from './pages/BeneficiosPage/BeneficiosPage.jsx';
import { Credito } from './pages/CreditosPage/Creditos.jsx';
import { TermosdeUso } from './pages/TermosdeusoPage/TermosdeUso.jsx';
import { Politica } from './pages/Politica.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/beneficios' element={<BeneficiosPage />}/>
        <Route path='/creditos' element={<Credito />}/>
        <Route path='/termosdeuso' element={<TermosdeUso />}/>
        <Route path='/politicadeprivacidade' element={<Politica />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);