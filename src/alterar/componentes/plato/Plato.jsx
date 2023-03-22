import React, { useEffect, useState } from 'react';
function Plato(){

    //Funciones get
    const [listaPlato, setlistaPlato] = useState([])
    const [listaCategoria, setlistaCategoria] = useState([])
    //Obtener Platos
    const obtenerPlatosAsyncAwait = async function(idCategoria){
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
    
    const obtenerCategoriasAsyncAwait = async function(){
        
        try {
            const response = await fetch("http://127.0.0.1:8000/ejercicio1/categoria")
            const data = await response.json()//Se obtiene la data en forma de objeto
            
            if(data.error === ""){
                setlistaCategoria(data.categoria)//Variable de estado
            }else{
                console.error(data.error)
            }
            
        }catch(error) {
            console.error("Error obteniendo categorias")
        }
    }
    useEffect(function() {
        obtenerCategoriasAsyncAwait()
        obtenerPlatosAsyncAwait(-1)
    }, [])

    //Variables body
    const [nombre, setnombre] = useState("");
    const [link, setlink] = useState("");
    const [precio, setprecio] = useState("");
    const [categoria, setcategoria] = useState("");
    const [estado, setestado] = useState("");
    const [nombre2, setnombre2] = useState("");
    const [link2, setlink2] = useState("");
    const [precio2, setprecio2] = useState("");
    const [categoria2, setcategoria2] = useState("");
    const [estado2, setestado2] = useState("");
    const [id, setid] = useState("");
    const [id2, setid2] = useState("");
    //Functiones post
    const handleSubirPlato = async function(){
        const body = {
            nombre:nombre,
            link:link,
            precio:precio,
            categoria:categoria,
            estado:estado
        }
        const response = await fetch('http://127.0.0.1:8000/ejercicio1/registrarPlato', 
        {method : "POST",
        body : JSON.stringify(body)})
        const data = await response.json()
    }

    const handleEditarPlato = async function(){
        const body = {
            id:id,
            nombre:nombre2,
            link:link2,
            precio:precio2,
            categoria:categoria2,
            estado:estado2
        }
        const response = await fetch('http://127.0.0.1:8000/ejercicio1/modificarPlato', 
        {method : "POST",
        body : JSON.stringify(body)})
        const data = await response.json()
    }

    const handleEliminarPlato = async function(){
        const body = {
            id:id2
        }
        const response = await fetch('http://127.0.0.1:8000/ejercicio1/eliminarPlato', 
        {method : "POST",
        body : JSON.stringify(body)})
        const data = await response.json()
    }
    //Functiones para llamar al post
    const Agregar = function(){
        handleSubirPlato()
    }
    const Modificar = function(){
        handleEditarPlato()
    }
    const Eliminar = function(){
        handleEliminarPlato()
    }
    //Para que nadie se pegue en top ni en bot por 4 unidades.<div className="mt-4 mb-4">
    return <div className="mt-4 mb-4">
        <div className='row'>
        <blockquote className="blockquote text-center">
            <p>Agregar</p>
        </blockquote>
        <div className="col-md-4"></div>
        <div className="col-md-4">
            <form>
                <div className="col-auto text-center">
                    <input type="text" className="form-control" placeholder="Nombre del plato"
                    value={nombre} onChange={(event) => setnombre(event.target.value)}
                    />
                </div>
                <br></br>
                <div class="input-group">
                    <span class="input-group-text" id="basic-addon3">https://imagen.com/plato/</span>
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"
                    value={link} onChange={(event) => setlink(event.target.value)}
                    />
                </div>
                <br></br>
                <div className="col-auto text-center">
                    <input type="text" className="form-control" placeholder="Precio"
                    value={precio} onChange={(event) => setprecio(event.target.value)}
                    />
                </div>
                <br></br>
                <div className="col-auto">
                
                    <select className="form-select"
                    value={categoria}
                    onChange={(event) => setcategoria(event.target.value)}
                    >
                        <option selected>Categoria...</option>
                    {
                listaCategoria.map(function(cat){
                    return <option value={ cat.id }>
                        { cat.nombre }
                    </option>
                })
                    }
                    </select>
                </div>
                <br></br>
                <div className="col-auto">
                    <select className="form-select"
                    value={estado}
                    onChange={(event) => setestado(event.target.value)}
                    >
                        <option selected>¿Estado del plato?</option>
                        <option value={ "A" }>Activo</option>
                        <option value={ "I" }>Inactivo</option>
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
                        <option selected>Plato...</option>
                        {
                        listaPlato.map(function(cat){
                        return <option value={ cat.id }>
                            { cat.nombre }
                        </option>
                        })}
                    </select>
                </div>
                <br></br>
                <div className="col-auto text-center">
                    <input type="text" className="form-control" placeholder="Nombre del nuevo plato"
                    value={nombre2} onChange={(event) => setnombre2(event.target.value)}
                    />
                </div>
                <br></br>
                <div class="input-group">
                    <span class="input-group-text" id="basic-addon3">https://imagen.com/plato/</span>
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"
                    value={link2} onChange={(event) => setlink2(event.target.value)}
                    />
                </div>
                <br></br>
                <div className="col-auto text-center">
                    <input type="text" className="form-control" placeholder="Precio"
                    value={precio2} onChange={(event) => setprecio2(event.target.value)}
                    />
                </div>
                <br></br>
                <div className="col-auto">
                
                    <select className="form-select"
                    value={categoria2}
                    onChange={(event) => setcategoria2(event.target.value)}
                    >
                        <option selected>Categoria...</option>
                    {
                listaCategoria.map(function(cat){
                    return <option value={ cat.id }>
                        { cat.nombre }
                    </option>
                })
                    }
                    </select>
                </div>
                <br></br>
                <div className="col-auto">
                    <select className="form-select"
                    value={estado2}
                    onChange={(event) => setestado2(event.target.value)}
                    >
                        <option selected>¿Estado del plato?</option>
                        <option value={ "A" }>Activo</option>
                        <option value={ "I" }>Inactivo</option>
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
                        <option selected>Plato...</option>
                    {
                        listaPlato.map(function(cat){
                        return <option value={ cat.id }>
                            { cat.nombre }
                        </option>
                    })}
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
export default Plato