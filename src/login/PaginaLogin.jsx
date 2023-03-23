import { Await, useNavigate } from "react-router-dom"
import { useState } from "react"
import PaginaFormulario from "./componentes/PaginaFormulario"

function PaginaLogin(){
    const navigate = useNavigate()//Para cambiar de pestaña
    const [Errores, seterror] = useState("")
    const IngresarDatosLogin = async function(usuario, password){
        //1. Peticion HTTP POST -> /endpoints/login
        //El fetch esta configurado por defecto hacer peticiones GET, lo transformamos a POST
        const response = await fetch("http://127.0.0.1:8000/ejercicio1/login",
        {
            method : "POST",//Transformamos
            //Se va a enviar el objeto en formato JSON como STRING.
            body : JSON.stringify(
                {email : usuario, password : password}
                )
        }
        )
        //Respuesta en forma de JSON
        const data = await response.json()
        
        return data
    }

    const onLoginOk = async function(
        usuario, password
    ) {
        const datos = await IngresarDatosLogin(usuario, password)
        if(datos.error === ""){
                                            //Login Correcto
            //dataUsuario es un objeto JavaScript, "podemos" convertirlo en un STRING, si queremos.
            const dataUsuario = {
                email : usuario,
                password : password,
                nombre : datos.usuario
            }

            // JSON.stringify : convierte el objeto JavaScript a un STRING de JSON 
            //(necesitamos hacer esto para el sessionStorage)
            const dataUsuarioJSON = JSON.stringify(dataUsuario)
            console.log("Objeto JScript",dataUsuario)
            console.log("String JSON",dataUsuarioJSON)
            // Guardado en session storage, hasta que se cierre la pestaña
            //sessionStorage.setItem("nombre", valor) = guardando info
            //sessionStorage.getItem("nombre") = EXTRALLENDO info.
            sessionStorage.setItem("DATA_USUARIO", dataUsuarioJSON)
            
            seterror(datos.error) 
            console.error("errores",Errores)
            navigate("/Ejercicio1/datos", {
                //Con el state podemos enviar un objeto javaScript y poder obtenerlo en la
                //siguiennte pagina (Datos), se busca como "location.state", poner ctrl+F
                state : {
                    email : usuario
                }
            })
        }else{
            console.error(datos.error)
            seterror(datos.error)                      
        }
    }
    const advertencia = []
    advertencia.push(
        <div className="text-center">{Errores}</div>
    )
    //Para que nadie se pegue en top ni en bot por 4 unidades.<div className="mt-4 mb-4">
    return <div className="container mt-4 mb-4">
        {
            //Encabezado
        }
        <div className="row"><br></br></div>
        {
            //CUERPO:
        }
        <div className="row">
            
            <div className="col-md-4"></div>
            <div className="col-md-4">
            <PaginaFormulario 
                    onLoginOk={ onLoginOk } />
            </div>
            <div className="col-md-4">
            <div>
            </div>
            </div>
        </div>
        <div className="row">

            <div className="col-md-4"></div>
            <div className="col-md-4"><br></br>{advertencia}</div>
            <div className="col-md-4"></div>
        
        </div>
        {
            //Parte de abajo
        }
        <div className="row-md-4"></div>
    </div>
    
}
export default PaginaLogin