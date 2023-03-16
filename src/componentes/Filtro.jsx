function Filtro(props) {
    //Me devuelve un combito, un selector donde permite elegir una categoria
    //Para que nadie se pegue en top ni en bot por 4 unidades.
    return <div className="mt-4 mb-4">
        
        <figure class="text-center">
            <blockquote class="blockquote">
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