
import { Link } from "react-router-dom"
function Alterar(){

                               

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
                
        <br></br>
        <figure className="text-center">
            <Link to="/ejercicio1/alterar/categoria">Categoria</Link>
            <br></br>
            <br></br>
            <Link to="/ejercicio1/alterar/ingredientes">Ingredientes</Link>
            <br></br>
            <br></br>
            <Link to="/ejercicio1/alterar/pasos">Pasos</Link>
            <br></br>
            <br></br>
            <Link to="/ejercicio1/alterar/plato">Plato</Link>
        </figure>
    </div>
}
export default Alterar