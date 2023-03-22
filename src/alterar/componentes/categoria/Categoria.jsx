
import React, { useEffect, useState } from 'react';

import Formulario from './componentes/Formulario'
function Categoria(){

    //Funciones get
    const [listaCategorias, setListaCategorias] = useState([])
    
    //Obtener categorias
    const obtenerCategoriasAsyncAwait = async function(){
        
        try {
            const response = await fetch("http://127.0.0.1:8000/ejercicio1/categoria")
            const data = await response.json()//Se obtiene la data en forma de objeto
            
            if(data.error === ""){
                setListaCategorias(data.categoria)//Variable de estado
            }else{
                console.error(data.error)
            }
            
        }catch(error) {
            console.error("Error obteniendo categorias")
        }
    }
    useEffect(function() {
        obtenerCategoriasAsyncAwait()
        
    }, [])
    //Variables para el body
    const [id, setid] = useState("");
    const [id2, setid2] = useState("");
    const [nombre, setnombre] = useState("");
    const [nombre2, setnombre2] = useState("");
    //Functiones post
    const handleSubirCategoria = async function(){
        const body = {
            nombre:nombre
        }
        const response = await fetch('http://127.0.0.1:8000/ejercicio1/registrarCategoria', 
        {method : "POST",
        body : JSON.stringify(body)})
        const data = await response.json()
    }
    const handleModificarCategoria = async function(){
        const body = {
            id:id,
            nombre:nombre2
        }
        const response = await fetch('http://127.0.0.1:8000/ejercicio1/modificarCategoria', 
        {method : "POST",
        body : JSON.stringify(body)})
        const data = await response.json()
    }
    const handleEliminarCategoria = async function(){
        const body = {
            id:id2
        }
        const response = await fetch('http://127.0.0.1:8000/ejercicio1/eliminarCategoria', 
        {method : "POST",
        body : JSON.stringify(body)})
        const data = await response.json()
    }
    //Functiones para llamar al post
    const AgregarCategoria = function(){
        handleSubirCategoria()
    }
    const ModificarCategoria = function(){
        handleModificarCategoria()
    }
    const EliminarCategoria = function(){
        handleEliminarCategoria()
    }
    
    //Para que nadie se pegue en top ni en bot por 4 unidades.<div className="mt-4 mb-4">
    return <div className="mt-4 mb-4 hideScroll">
        
        <div className="row">
        <blockquote className="blockquote text-center">
            <p>Agregar</p>
        </blockquote>
            <div className="col-md-4"></div>
            <div className="col-md-4">
            <form>
                <div className="col-auto text-center">
                    <input type="text" className="form-control" placeholder="Nombre de la categoria"
                    value={nombre} onChange={(event) => setnombre(event.target.value)}
                    />
                </div>
                <br></br>
                <div className="col-auto text-center">
                    <button type="submit" className="btn btn-primary" onClick={AgregarCategoria}>Añadir elemento</button> 
                </div>
                <br></br>
            </form>
            </div>
            <div className="col-md-4"></div>
        </div>
        <div className="row">
        <blockquote className="blockquote text-center">
            <p>Modificar</p>
        </blockquote>
            <div className="col-md-4"></div>
            <div className="col-md-4">
            <form>
                <div className="col-auto text-center">
                    <input type="text" className="form-control" placeholder="Nombre nuevo de la categoria"
                    value={nombre2} onChange={(event) => setnombre2(event.target.value)}/>
                </div>
                <br></br>
                
                <div className="col-auto">
                
                <select className="form-select"
                value={id}
                onChange={(event) => setid(event.target.value)}
                >
                    <option selected>Categoria...</option>
                    {
                    listaCategorias.map(function(cat){
                    return <option value={ cat.id }>
                        { cat.nombre }
                    </option>})
                    }
                </select>
            </div>
                <br></br>
                <div className="col-auto text-center">
                    <button type="submit" className="btn btn-primary" onClick={ModificarCategoria}>Editar elemento</button> 
                </div>
                <br></br>          
            </form>
            </div>
            <div className="col-md-4"></div>
        </div>

        <div className="row">
        <blockquote className="blockquote text-center">
            <p>Eliminar</p>
        </blockquote>
        <div className="col-md-4"></div>
        <div className="col-md-4">
        <form>
            <div className="col-auto">
                <select className="form-select"
                value={id2}
                onChange={(event) => setid2(event.target.value)}
                >
                    <option selected>Categoria...</option>
                    {
                listaCategorias.map(function(cat){
                    return <option value={ cat.id }>
                        { cat.nombre }
                    </option>
                })
                    }
                </select>
            </div>
            <br></br>
            <div className="col-auto text-center">
                <button type="submit" className="btn btn-primary" onClick={EliminarCategoria}>Quitar elemento</button> 
            </div>  
        </form>
        </div>
        <div className="col-md-4"></div>
        </div>
    </div>
}
export default Categoria