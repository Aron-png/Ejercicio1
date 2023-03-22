import React, { useEffect, useState } from 'react';
function Ingredientes(){
    //Funciones get
    const [listaIngredientes, setListaIngredientes] = useState([])
    const [listaPlato, setlistaPlato] = useState([])
    //Obtener Ingredientes
    const obtenerIngredientesAsyncAwait = async function(idPlato){
        try {
            const response = await fetch(`http://127.0.0.1:8000/ejercicio1/ingredientes?plato=${idPlato}`)
            const data = await response.json()//Se obtiene la data en forma de objeto
            
            if(data.error === ""){
                setListaIngredientes(data.ingredientes)//Variable de estado
            }else{
                console.error(data.error)
            }
            
        }catch(error) {
            console.error("Error obteniendo categorias")
        }
    }
    //Obtener Platos
    const obtenerPlatoAsyncAwait = async function(idCategoria){
        try {
            const response = await fetch(`http://127.0.0.1:8000/ejercicio1/plato?categoria=${idCategoria}`)
            const data = await response.json()//Se obtiene la data en forma de objeto
            
            if(data.error === ""){
                setlistaPlato(data.platos)//Variable de estado
            }else{
                console.error(data.error)
            }
            
        }catch(error) {
            console.error("Error obteniendo categorias")
        }
    }
    //Llamar a las funciones
    useEffect(function() {
        obtenerIngredientesAsyncAwait(-1)
        obtenerPlatoAsyncAwait(-1)
    }, [])
    //Variables para el body
    const [id, setid] = useState("");
    const [id2, setid2] = useState("");
    const [nombre, setnombre] = useState("");
    const [nombre2, setnombre2] = useState("");
    const [plato,setplato] = useState("");
    const [plato2,setplato2] = useState("");
    //Functiones post
    const handleSubirIngrediente = async function(){
        const body = {
            nombre:nombre,
            plato:plato
        }
        const response = await fetch('http://127.0.0.1:8000/ejercicio1/registrarIngredientes', 
        {method : "POST",
        body : JSON.stringify(body)})
        const data = await response.json()
    }
    const handleEditarIngrediente = async function(){
        const body = {
            id:id,
            nombre:nombre2,
            plato:plato2
        }
        const response = await fetch('http://127.0.0.1:8000/ejercicio1/modificarIngrediente', 
        {method : "POST",
        body : JSON.stringify(body)})
        const data = await response.json()
    }
    const handleQuitarIngrediente = async function(){
        const body = {
            id:id2
        }
        const response = await fetch('http://127.0.0.1:8000/ejercicio1/eliminarIngrediente', 
        {method : "POST",
        body : JSON.stringify(body)})
        const data = await response.json()
    }
    //Functiones para llamar al post
    const Agregar = function(){
        handleSubirIngrediente()
    }
    const Modificar = function(){
        handleEditarIngrediente()
    }
    const Eliminar = function(){
        handleQuitarIngrediente()
    }
    //Para que nadie se pegue en top ni en bot por 4 unidades.<div className="mt-4 mb-4">
    return <div className="mt-4 mb-4">
        <div className="row">
            <blockquote className="blockquote text-center">
                <p>Agregar</p>
            </blockquote>
            <div className="col-md-4"></div>
            <div className="col-md-4">
            <form>
                <div className="col-auto text-center">
                    <input type="text" className="form-control" placeholder="Nombre del ingrediente"
                    value={nombre} onChange={(event) => setnombre(event.target.value)}
                    />
                </div>
                <br></br>
                <div className="col-auto">
                    <select className="form-select"
                    value={plato}
                    onChange={(event) => setplato(event.target.value)}
                    >
                        <option selected>Plato...</option>
                    {
                    listaPlato.map(function(cat){
                        return <option value={ cat.id }>
                            { cat.nombre }
                        </option>
                        })
                    }
                    </select>
                </div>
                <br></br>
                <div className="col-auto text-center">
                    <button type="submit" className="btn btn-primary" onClick={Agregar}>Añadir elemento</button> 
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
            <div className="col-auto">
                <select className="form-select"
                    value={id}
                    onChange={(event) => setid(event.target.value)}
                >
                <option selected>Ingredientes...</option>
                    {
                    listaIngredientes.map(function(cat){
                        return <option value={ cat.id }>
                            {cat.plato.nombre} - { cat.nombre }</option>})
                    }
                </select>
            </div>
            <br></br>
            <div className="col-auto text-center">
                <input type="text" className="form-control" placeholder="Nombre del nuevo ingrediente"
                    value={nombre2} onChange={(event) => setnombre2(event.target.value)}
                />
            </div>
            <br></br>
            <div className="col-auto">
                    <select className="form-select"
                    value={plato2}
                    onChange={(event) => setplato2(event.target.value)}
                    >
                        <option selected>Plato...</option>
                    {
                    listaPlato.map(function(cat){
                        return <option value={ cat.id }>
                            { cat.nombre }
                        </option>
                        })
                    }
                    </select>
            </div>
            <br></br>
            <div className="col-auto text-center">
                <button type="submit" className="btn btn-primary" onClick={Modificar}>Editar elemento</button> 
            </div>
            <br></br>
        </form>
        </div>

        <div className="col-md-4"></div>
        </div>


        <div className='row'>
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
                        <option selected>Ingredinetes...</option>
                    {
                    listaIngredientes.map(function(cat){
                        return <option value={ cat.id }>
                            {cat.plato.nombre}-{ cat.nombre }
                        </option>
                        })
                    }
                    </select>
            </div>
            <br></br>
            <div className="col-auto text-center">
                <button type="submit" className="btn btn-primary" onClick={Eliminar}>Quitar elemento</button> 
            </div> 
            <br></br>
            </form>
        </div>
        <div className="col-md-4"></div>
        </div>
        </div>
    
}
export default Ingredientes