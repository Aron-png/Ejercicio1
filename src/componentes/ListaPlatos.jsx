import ValorPlato from "./ValorPlato"

function ListaPlatos(props){
    const listaRows = []//Lista de filas
    let listaCols = []//Lista de columnas
    //la funcion map ejecuta la funcion en cada elemento de la lista de manera PARALELA
    //En for seria secuencial. PERO el forEach() funciona de manera a map pero se ejecuta de forma //
    //SECUENCIAL, python manage.py startapp ejercicio1
    props.platos.forEach(function(plato, index) {
        if (index % 2 === 0) {//indices pares, para que cada que 2 "col" se cree un "row" 
            //lo que te permite el ` es convertirle en un String. AltGr y teclado al costado de enter
            listaCols.push(
                <div className="col-md-6">
                    {
                        //El key es necesario para q no salga un warning(advertencia y no error).
                    }
                    <ValorPlato key={ plato.id } plato={ plato }/>
                </div>
            )
        } else {
            listaCols.push(
                <div className="col-md-6">
                    <ValorPlato key={ plato.id } plato={ plato } />
                </div>
            )
            listaRows.push(
                <div className="row">
                    { listaCols }
                </div>
            )
            listaCols = []
        }
    })
    //Como pinta de 2 en 2, Si el numero de peliculas es impar (faltara una pelicula por pintar)
    //Es por esto que ponemos:
    if (props.platos.length % 2 !== 0) {
        listaCols = []
        listaCols.push(
            <div className="col-md-6">
                <ValorPlato key={ props.platos[props.platos.length - 1].id } 
                    plato={ props.platos[props.platos.length - 1] }/>
            </div>
        )
        listaRows.push(
            <div className="row">
                { listaCols }
            </div>
        )
    }

    return <div>
        {
            listaRows//Retornar lista filas
        }
    </div>
}
export default ListaPlatos