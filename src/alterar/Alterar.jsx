
import { Link } from "react-router-dom"
function Alterar(){

                               

    //Para que nadie se pegue en top ni en bot por 4 unidades.<div className="mt-4 mb-4">
    return <div className="mt-4 mb-4"> 
        <blockquote className="blockquote text-center">
            <p>¿Que bloque de datos desea alterar?</p>
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
                
        <br></br>
        <figure className="text-center">
        <ul class="list-group">
        
            <li class="list-group-item list-group-item-light">
                <Link className="estilo1" to="/Ejercicio1/alterar/ingredientes">Ingredientes</Link>
            </li>
            
            <li class="list-group-item list-group-item list-group-item-info">
                <Link className="estilo1" to="/Ejercicio1/alterar/categoria">Categorias</Link>
            </li>
            
            <li class="list-group-item list-group-item-warning">
                <Link className="estilo1" to="/Ejercicio1/alterar/plato">Platos</Link>
            </li>
            
            <li class="list-group-item list-group-item-danger">
                <Link className="estilo1" to="/Ejercicio1/alterar/pasos">Pasos</Link>
            </li>
        </ul>
        </figure>
    </div>
}
export default Alterar