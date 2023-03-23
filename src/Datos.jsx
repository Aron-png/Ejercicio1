import { useEffect, useState } from "react"
import Filtro from "./componentes/Filtro"
import { useLocation, useNavigate } from "react-router-dom"
import ListaPlatos from "./componentes/ListaPlatos"
{
    /*
    En conclucion: Se agrego el "location" para que cuando uno valla con el enlace
    /MainPage  me regrese a la pagina /LoginPage, como que diciendo que si o si
    debo registrarme para entrar. Ademas se pueda filtrar peliculas por categoria.
    */
}

function MainPage() {
    // Variable de estado
    const [listaPlatos, setlistaPlatos] = useState([])
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
    //Obtener platos
    const filtrarPlatos = async function(categoriaId){
        try {
            //Interpolacion de String con JavaScript
            //Para concatener variable con cadenas de String, envez de usar +
            const response = await fetch(
                `http://127.0.0.1:8000/ejercicio1/plato?categoria=${categoriaId}`
                )
            const data = await response.json()//Recojo el objeto, lista de peliculas
            if(data.error===""){
                setlistaPlatos(data.platos)
            }else{
                console.error(data.error)
            }
        }catch(error) {
            console.error("Error de comunicacion")
        }
    }
    /* variables de estado */
    const location = useLocation()

    const navigate = useNavigate()
    useEffect(function() {
        if (location.state == null) {
            navigate("/Ejercicio1")
        }else {
            obtenerCategoriasAsyncAwait()
            filtrarPlatos(-1)
        }
        
    }, [])
/*
    Operador Ternario:
            Es una "Expresion" = bloque de codigo que va a devolver un valor.
            <condicion>?<si_es_true>:<si_es_false>
            return location.state !== null ? <div>Main Page: {location.state.username}</div>:<div></div>
            A diferencia de los "if", no de vuelve ningun valor.
*/
    
    return location.state !== null ? <div className="container">
    <Filtro 
        categorias={ listaCategorias }
        listaplatos={listaPlatos}
        onFiltrar={ filtrarPlatos }         
        />
    <ListaPlatos 
        platos={ listaPlatos } />
    </div>: <div></div>//div vacio
}
export default MainPage