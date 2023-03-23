import { Link } from "react-router-dom"
function Filtro(props) {
    //devuelve el nombre de usuario
    const datosJSON = sessionStorage.getItem("DATA_USUARIO")
    const datos = JSON.parse(datosJSON)
    console.log("JSON",datosJSON)//STRING
    console.log("datos",datos)//OBJETO
    const usuario = []
    //Registra una lista cetegorias: se devuelve en Alterar o en sus componentes
    const Lista_CategoriasJSON = JSON.stringify(props.categorias)//de obj a STRING
            console.log("Objeto JScript",props.categorias)
            console.log("String JSON",Lista_CategoriasJSON)
    sessionStorage.setItem("ListaCategorias", Lista_CategoriasJSON)
    //Registra una lista platos
    const Lista_PlatosJSON = JSON.stringify(props.listaplatos)//de obj a STRING
            console.log("Objeto JScript",props.listaplatos)
            console.log("String JSON",Lista_PlatosJSON)
    sessionStorage.setItem("ListaPlatos", Lista_PlatosJSON)




    //Recuerda que dentro del atributo de un objeto hay un array.
    //{email:"aaronlivias0412@gmail.com", password :"admin", nombre :[{ valor :"Aaron"}]} --nombre[0]
    usuario.push(<div className="fs-1 text-center">Bienvenido { datos.nombre[0].valor }</div>)
    //La funcion hola no sirve. 
    //Aprendi que las funciones que retornan <div> no rentan es mejor ponerlo en un array.
    //solo retorna el bienvenido “nombre” que esta dentro del array por el push().
    const hola = function(){
        return <div>holaaaa</div>
    }
    
    //Para que nadie se pegue en top ni en bot por 4 unidades.<div className="mt-4 mb-4">
    
    return <div className="mt-4 mb-4">
        
        <figure className="text-center">
            {usuario}
            {hola}
            <br></br>
            <Link className="estilo2" to="/Ejercicio1/alterar">Alterar los datos</Link>
            
            <br></br><br></br>
            <blockquote className="blockquote">
             <p>Categoría</p>
            </blockquote>
        </figure>
        <select className="form-select"
        //Recordemos que el onChange te recoge el id de la categoría seleccionada por el selector.
        //Aquel id = evt.target.value
            onChange={ function(evt) { 
                //Llamos a la funcion filtrar para que me retorne una lista filtrada x categoria
                //Veelo como onFiltrar == filtrarPelicula(value) del MainPage
                props.onFiltrar(evt.target.value)
            }}>
{/*Agregamos un option extra, Si la categoria id es -1, me devuelve toda la lista xq no pasa por 
filtrado */}
            <option value={-1}>Todas</option>
{/* Retorna botones "option" de selector de las categorias. "Value" es un id, porque al momento de 
seleccionar debe entregarme en codigo el id de la categoria.*/
                props.categorias.map(function(cat){
                    return <option value={ cat.id }>
                        { cat.nombre }
                    </option>
                })
            }
        </select>
    </div>
}

export default Filtro