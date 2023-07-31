import { Link } from "react-router-dom"
import Logo from '../imagenes/Logo.jpg'
function Elemento(props){
    if(props.current==true){//current son las ocurrencias del for, osea el i
        //el "current col" y "col" = no existen aun
        return <Link to={props.UNenlace} className="current col">{props.UNtexto}</Link>
    }else{
        return <Link to={props.UNenlace} className="col">{props.UNtexto}</Link>
    }
}
function TopNav(props){
    
    const enlaces = ["/Ejercicio1/Login","/Ejercicio1/Record","/Ejercicio1/Login","/Ejercicio1/Login","/Ejercicio1/Login"]
    const textos = ["Inicio Sesion","Registrate","Inicio","Platos","Restaurantes"]
    const barra = []
    barra.push(<Elemento current = {false} UNenlace={enlaces[0]} UNtexto={textos[0]}/>)
    barra.push(<t> o </t>)
    barra.push(<Elemento current = {false} UNenlace={enlaces[1]} UNtexto={textos[1]}/>)
    barra.push(<div><br></br><br></br></div>) 
    
    for (let i=2;i<5;i++){
        if(i === props.category){
            barra.push(<Elemento current = {true} UNenlace={enlaces[i]} UNtexto={textos[i]}/>)
        }
        else{
            barra.push(<t> // </t>)
            barra.push(<Elemento current = {false} UNenlace={enlaces[i]} UNtexto={textos[i]}/>)
        }
    }
//la clase hideScroll = sirve para quitar la barra vertical
//el topnav = no existe aun
    return <div className="topnav hideScroll">
        <div className="row mt-4 mb-4">
            <div className="column col-6">
                <img src={Logo} style={{width: "50%"}} 
                alt="no se puede mostrar el logo" />
            </div>
            <div className="column col-6">
                {barra}
            </div>
        </div>
    </div>
}

export default TopNav