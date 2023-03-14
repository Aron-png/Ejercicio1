import { useEffect, useState } from "react"
import Filtro from "./componentes/Filtro"
import { useLocation, useNavigate } from "react-router-dom"
import ListaPlatos from "./componentes/ListaPlatos"
{
    /*
    En conclucion: Se modifico todo esto para que cuando uno valla con el enlace
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
        const Categorias = [
            {
                id : "1",
                nombre : "Desayuno"
            },
            {
                id : "2",
                nombre : "Almuerzo"
            },
            {
                id : "3",
                nombre : "Cena"
            }
    ]
        setListaCategorias(Categorias)
    }
    //Obtener platos
    const filtrarPlatos = function(CategoriaID){
        const Platos = [
            {
                id : "1",
                nombre : "pan con pollo",
                link : "https://s3.amazonaws.com/menuperu.pe/media/receta/Pan+con+pollo+diferente-2934.jpeg",
                precio : "2.5",
                categoria : "1"
            },
            {
                id : "2",
                nombre : "Quinua",
                link : "https://comidasperuanas.net/wp-content/uploads/2020/12/Quinua-con-manzana.jpg",
                precio : "3.5",
                categoria : "1"
            },
            {
                id : "3",
                nombre : "Ceviche",
                link : "https://blog.plazavea.com.pe/wp-content/uploads/2022/01/Ceviche-1200x675.jpg",
                precio : "11.5",
                categoria : "2"
            },
            {
                id : "4",
                nombre : "Lomo saltado",
                link : "https://buenazo.cronosmedia.glr.pe/original/2021/10/26/6178143978694721ec168b49.jpg",
                precio : "18.5",
                categoria : "2"
            },
            {
                id : "5",
                nombre : "Tallarin verde con milanesa",
                link : "https://i.ytimg.com/vi/enxbUqDbq2g/maxresdefault.jpg",
                precio : "17.5",
                categoria : "2"
            },
            {
                id : "6",
                nombre : "Anticucho",
                link : "https://i0.wp.com/comidasdelperu.com/wp-content/uploads/2021/06/receta-de-anticuchos.jpg?fit=1280%2C720&ssl=1",
                precio : "18.5",
                categoria : "3"
            }
            ]
        if(CategoriaID==-1){
            setlistaPlatos(Platos)
            console.log("Platos",Platos)
        }else{
            const PlatosFiltrados = []
            Platos.map(function(cat){
                if(cat.categoria==CategoriaID){
                    PlatosFiltrados.push(cat)
                }
            })
            console.log("Platos Filtrados",PlatosFiltrados)
            setlistaPlatos(PlatosFiltrados)
        }
    }
    /* No usamos aun las variables de estado */
    const location = useLocation()

    const navigate = useNavigate()

    useEffect(function(){
        obtenerCategoriasAsyncAwait()
        filtrarPlatos(-1)
    },[])
    
    return <div className="container">
    {
        //Se pasara con un props. las siguientes funciones
    }
    <Filtro 
        categorias={ listaCategorias }
        onFiltrar={ filtrarPlatos } />
    <ListaPlatos 
        platos={ listaPlatos } />
</div>
}
export default MainPage