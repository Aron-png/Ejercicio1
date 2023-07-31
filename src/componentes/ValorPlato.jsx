import { useNavigate } from "react-router-dom"
function ValorPlato(props) {
    //Si ponemos style acerlo asi: style={{ height }}
    //dentro del style recibe un objeto javaScript, 

    const navigate = useNavigate()

    const butOnClick = function() {
        navigate("/Ejercicio1/plato", {
            //Con el state podemos enviar un objeto javaScript y poder obtenerlo en la
            //siguiennte pagina (InfoPlato), se busca como "location.state", poner ctrl+F
            state : {
//Todo parece indicar que props.plato.link o .estado = proviene del backend, visto en el postman
                idplato : props.plato.id,
                nombre : props.plato.nombre,
                link : props.plato.link
            }
        })
    }
    const EstadoImagen = []
    const EstadoBoton = []
    if(props.plato.estado=="I"){
        EstadoImagen.push(
            <img src={ props.plato.link } 
            className="card-img-top img-fluid mydiv" 
            alt="..." />
        )
        EstadoBoton.push(
            <p>El plato esta Deshabilitado, lo sentimos...</p>
        )
    }else{
        EstadoImagen.push(
            <img src={ props.plato.link } 
            className="card-img-top img-fluid" 
            alt="..." />
        )
        EstadoBoton.push(
            <button onClick={ butOnClick } className="btn btn-primary" type="button">
                    Saber mas!
                </button> 
        )
    }

    return <div className="card mb-3">
        {
            EstadoImagen
        }
        
        <div className="card-body">
            <h5 className="card-title">{ props.plato.nombre }</h5>
            <p className="card-text">Precio: {props.plato.precio} soles</p>
            <p className="card-text"><small className="text-muted">
                {EstadoBoton}
                </small></p>
        </div>
    </div>
}

export default ValorPlato