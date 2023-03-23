import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Datos from './Datos';
import InfoPlato from './InfoPlato';
import Login from './login/PaginaLogin';
import Alterar from './alterar/Alterar';
import Categoria from './alterar/componentes/categoria/Categoria';
import Ingredientes from './alterar/componentes/ingredientes/Ingredientes';
import Pasos from './alterar/componentes/pasos/Pasos';
import Plato from './alterar/componentes/plato/Plato';//Minuscula las carpetas y mayuscula los archivos
import './Style/style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {//Aca alineamos los hiperviculos a una pagina e importamos sus librerias
      }
        <Route path='/Ejercicio1' element={ <Login/> } /> 
        <Route path='/Ejercicio1/datos' element={ <Datos/> } />
        <Route path='/Ejercicio1/plato' element={ <InfoPlato/> } />
        <Route path='/Ejercicio1/alterar' element={ <Alterar/> } />
        <Route path='/Ejercicio1/alterar/categoria' element={ <Categoria/> } />
        <Route path='/Ejercicio1/alterar/ingredientes' element={ <Ingredientes/> } />
        <Route path='/Ejercicio1/alterar/pasos' element={ <Pasos/> } />
        <Route path='/Ejercicio1/alterar/plato' element={ <Plato/> } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
