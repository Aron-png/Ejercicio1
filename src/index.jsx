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
        <Route path='/' element={ <Login/> } /> 
        <Route path='/ejercicio1/' element={ <Datos/> } />
        <Route path='/ejercicio1/plato' element={ <InfoPlato/> } />
        <Route path='/ejercicio1/alterar' element={ <Alterar/> } />
        <Route path='/ejercicio1/alterar/categoria' element={ <Categoria/> } />
        <Route path='/ejercicio1/alterar/ingredientes' element={ <Ingredientes/> } />
        <Route path='/ejercicio1/alterar/pasos' element={ <Pasos/> } />
        <Route path='/ejercicio1/alterar/plato' element={ <Plato/> } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
