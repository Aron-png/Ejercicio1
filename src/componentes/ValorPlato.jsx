function ValorPlato(props) {
    //Si ponemos style acerlo asi: style={{ height }}
    //dentro del style recibe un objeto javaScript
    return <div className="card mb-3">
        <img src={ props.plato.link } 
            className="card-img-top img-fluid" 
            alt="..." />
        <div className="card-body">
            <h5 className="card-title">{ props.plato.nombre }</h5>
            <p className="card-text">Precio: {props.plato.precio} soles</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
    </div>
}

export default ValorPlato