import React, { useEffect, useState } from 'react';
function Pasos(){
    //Funciones get
    const [listaPasos, setlistaPasos] = useState([])
    const [listaPlato, setlistaPlato] = useState([])
    //Obtener Pasos
    const obtenerPasosAsyncAwait = async function(idPlato){
        try {
            const response = await fetch(`http://127.0.0.1:8000/ejercicio1/pasos?plato=${idPlato}`)
            const data = await response.json()//Se obtiene la data en forma de objeto
            
            if(data.error === ""){
                setlistaPasos(data.Pasos)//Variable de estado
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
        obtenerPasosAsyncAwait(-1)
        obtenerPlatoAsyncAwait(-1)
    }, [])
    //Variables de body
    const [numero_paso, setnumero_paso] = useState("");
    const [descripcion, setdescripcion] = useState("");
    const [plato, setplato] = useState("");
    const [id, setid] = useState("");
    const [numero_paso2, setnumero_paso2] = useState("");
    const [descripcion2, setdescripcion2] = useState("");
    const [plato2, setplato2] = useState("");
    const [id2, setid2] = useState("");

    //Functiones post
    const handleSubirPaso = async function(){
        const body = {
            numero_paso:numero_paso,
            descripcion:descripcion,
            plato:plato
        }
        const response = await fetch('http://127.0.0.1:8000/ejercicio1/registrarPasos', 
        {method : "POST",
        body : JSON.stringify(body)})
        const data = await response.json()
    }

    const handleEditarPaso = async function(){
        const body = {
            id:id,
            numero_paso:numero_paso2,
            descripcion:descripcion2,
            plato:plato2
        }
        const response = await fetch('http://127.0.0.1:8000/ejercicio1/modificarPaso', 
        {method : "POST",
        body : JSON.stringify(body)})
        const data = await response.json()
    }

    const handleEliminarPaso = async function(){
        const body = {
            id:id2
        }
        const response = await fetch('http://127.0.0.1:8000/ejercicio1/eliminarPaso', 
        {method : "POST",
        body : JSON.stringify(body)})
        const data = await response.json()
    }
    //Functiones para llamar al post
    const Agregar = function(){
        handleSubirPaso()
    }
    const Modificar = function(){
        handleEditarPaso()
    }
    const Eliminar = function(){
        handleEliminarPaso()
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
                    <input type="text" className="form-control" placeholder="Numero del paso"
                    value={numero_paso} onChange={(event) => setnumero_paso(event.target.value)}
                    />
                </div>
                <br></br>
                <div class="input-group">
                    <span class="input-group-text">Descripcion</span>
                    <textarea class="form-control" aria-label="With textarea"
                    value={descripcion} onChange={(event) => setdescripcion(event.target.value)}
                    ></textarea>
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

        <div className='row'>
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
                        <option selected>Paso...</option>
                    {
                    listaPasos.map(function(cat){
                        return <option value={ cat.id }>
                            {cat.plato.nombre}-{ cat.numero_paso }
                        </option>
                        })
                    }
                    </select>
                </div>
                <br></br>
                <div className="col-auto text-center">
                    <input type="text" className="form-control" placeholder="Numero del paso"
                    value={numero_paso2} onChange={(event) => setnumero_paso2(event.target.value)}
                    />
                </div>
                <br></br>
                <div class="input-group">
                    <span class="input-group-text">Descripcion</span>
                    <textarea class="form-control" aria-label="With textarea"
                    value={descripcion2} onChange={(event) => setdescripcion2(event.target.value)}
                    ></textarea>
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
                        <option selected>Paso...</option>
                    {
                    listaPasos.map(function(cat){
                        return <option value={ cat.id }>
                            {cat.plato.nombre}-{ cat.numero_paso }
                        </option>
                        })
                    }
                    </select>
                </div>
                <br></br>
                <div className="col-auto text-center">
                    <button type="submit" className="btn btn-primary" onClick={Eliminar}>Editar elemento</button> 
                </div>
                <br></br>
            </form>
        </div>
        <div className="col-md-4"></div>
        </div>

    </div>
}
export default Pasos