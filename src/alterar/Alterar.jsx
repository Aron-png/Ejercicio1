import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
function Alterar(){

                                //CATEGORIAS y PLATOS: Ejemplo de como sacar data
    //devuelve el categoria
    const categoriaJSON = sessionStorage.getItem("ListaCategorias")
    const categoria = JSON.parse(categoriaJSON)
    console.log("JSON",categoriaJSON)//STRING
    console.log("datos",categoria)//OBJETO
    //devuelve el plato
    const platoJSON = sessionStorage.getItem("ListaPlatos")
    const plato = JSON.parse(platoJSON)
    console.log("JSON",platoJSON)//STRING
    console.log("datos",plato)//OBJETO
    
                                //PASOS e INGREDIENTES: No Borrar
    const [listaIngredientes, setlistaIngredientes] = useState([])
    const [listaPasos, setListaPasos] = useState([])

    //Obtener objetos
    const obtenerIngredientesAsyncAwait = async function(idPlato){
        
        try {
            const response = await fetch(`http://127.0.0.1:8000/ejercicio1/ingredientes?plato=${idPlato}`)
            const data = await response.json()//Se obtiene la data en forma de objeto
            
            if(data.error === ""){
                setlistaIngredientes(data.ingredientes)//Variable de estado
            }else{
                console.error(data.error)
            }
            
        }catch(error) {
            console.error("Error obteniendo ingredientes")
        }
    }

    const obtenerPasosAsyncAwait = async function(idPlato){
        
        try {
            const response = await fetch(`http://127.0.0.1:8000/ejercicio1/pasos?plato=${idPlato}`)
            const data = await response.json()//Se obtiene la data en forma de objeto
            
            if(data.error === ""){
                setListaPasos(data.Pasos)//Variable de estado
            }else{
                console.error(data.error)
            }
            
        }catch(error) {
            console.error("Error obteniendo Pasos")
        }
    }
    useEffect(function(){
        obtenerIngredientesAsyncAwait(-1)
        obtenerPasosAsyncAwait(-1)
    },[])
    console.log("listaIngredientes",listaIngredientes)
    console.log("listaPasos", listaPasos)
    //Registra una lista Ingredientes
    const listaIngredientesJSON = JSON.stringify(listaIngredientes)//de obj a STRING
            console.log("Objeto JScript",listaIngredientes)
            console.log("String JSON",listaIngredientesJSON)
    sessionStorage.setItem("listaIngredientes", listaIngredientesJSON)
    //Registra una lista Ingredientes
    const listaPasosJSON = JSON.stringify(listaPasos)//de obj a STRING
            console.log("Objeto JScript",listaPasos)
            console.log("String JSON",listaPasosJSON)
    sessionStorage.setItem("listaPasos", listaPasosJSON)
                                //PASOS e INGREDIENTES: Ejemplo de como sacar data
    //devuelve el ingrediente
    const ingredienteJSON = sessionStorage.getItem("listaIngredientes")
    const ingredientes = JSON.parse(ingredienteJSON)
    console.log("JSON",ingredienteJSON)//STRING
    console.log("datos",ingredientes)//OBJETO

    //devuelve el paso
    const pasoJSON = sessionStorage.getItem("listaPasos")
    const pasos = JSON.parse(pasoJSON)
    console.log("JSON",pasoJSON)//STRING
    console.log("datos",pasos)//OBJETO

    //Para que nadie se pegue en top ni en bot por 4 unidades.<div className="mt-4 mb-4">
    return <div className="mt-4 mb-4"> 
        <blockquote className="blockquote text-center">
            <p>¿Que bloque desea alterar de los datos?</p>
        </blockquote>
        {
            /*
        <select className="form-select"
        //Solo tienes que eliminar el obChange para que funcione 
        //porque Eliminar_Modificar no esta definido
        onChange={ function(evt) {
            Eliminar_Modificar(evt.target.value)
        }}
        >
            <option value={-1}>Todas</option>{
                plato.map(function(cat){
                    return <option value={ cat.id }>
                        { cat.nombre }
                    </option>
                })
            }
        </select>
            */
        }
        <select className="form-select"
        //Solo tienes que eliminar el obChange para que funcione 
        //porque Eliminar_Modificar no esta definido
        >
            <option value={-1}>Todas</option>{
                pasos.map(function(cat){
                    return <option value={ cat.id }>
                        { cat.numero_paso }
                    </option>
                })
            }
        </select>
        
        <br></br>
        <figure className="text-center">
            <Link to="/ejercicio1/alterar/categoria">Categoria</Link>
            <br></br>
            <Link to="/ejercicio1/alterar/ingredientes">Ingredientes</Link>
            <br></br>
            <Link to="/ejercicio1/alterar/pasos">Pasos</Link>
            <br></br>
            <Link to="/ejercicio1/alterar/plato">Plato</Link>
        </figure>
    </div>
}
export default Alterar