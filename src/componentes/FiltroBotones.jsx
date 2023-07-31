function FiltroBotones(props){
    let id
    const indice = function(evt){
        id=evt.target.value
    }
    const onFiltroOK = function(){
        props.onFiltrar(id)
    }
    const listCategoria = []
    return <div className="mt-4 mb-4">
        <label >
                  <input class="form-check-input me-1" type="checkbox" value={-1} 
                  onClick={ indice }
                  />
                  Todas&nbsp;&nbsp;&nbsp;
        {
            props.categorias.forEach(function(valor){
                    listCategoria.push( 
                        <input class="form-check-input me-1" type="checkbox" value={valor.id}
                        onClick={ indice }
                        />)
                    listCategoria.push(valor.nombre)
                    listCategoria.push(<t>&nbsp;&nbsp;&nbsp;</t>)         
            })
        }
        {listCategoria}
        </label>
        &nbsp;&nbsp;&nbsp;
        <button className="btn btn-success mt-2" type="button"
                onClick={ onFiltroOK }>
                Filtro
        </button>
    </div>
}
export default FiltroBotones