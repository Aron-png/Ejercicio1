import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Datos from './Datos';
import InfoPlato from './InfoPlato';
import './Style/style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {//Aca alineamos los hiperviculos a una pagina e importamos sus librerias
      }
        <Route path='/ejercicio1/' element={ <Datos/> } />
        <Route path='/ejercicio1/plato' element={ <InfoPlato/> } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
