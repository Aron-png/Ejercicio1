import { Await, useNavigate } from "react-router-dom"
import React, { useState } from 'react';
function PaginaRecord(){
    const navigate = useNavigate()//Para cambiar de pestaña
    //Variable para el body
    const [nombre, setnombre] = useState("");
    const [email, setemail] = useState("");
    const [contra, setcontra] = useState("");
    //Funcion Post
    const handleSubirUsuario = async function(){
        const body = {
           nombre:nombre,
           email:email,
           contra:contra
        }
    const response = await fetch('http://127.0.0.1:8000/ejercicio1/record', 
    {method : "POST",
    body : JSON.stringify(body)})
    const data = await response.json()
    }
    //Funcion donde se puede llamar al post
    //Functiones para llamar al post
    const SubirRecord = function(){
        handleSubirUsuario()
        navigate("/Ejercicio1/datos", {
            //Con el state podemos enviar un objeto javaScript y poder obtenerlo en la
            //siguiennte pagina (Datos), se busca como "location.state", poner ctrl+F
            state : {
                nombre : nombre
            }
        })
    }
    return <div className="container mt-4 mb-4">
        <div className="row">
            <div className="col-md-4"></div>

            <div className="col-md-4">
            <form>
             <div className="form-row">
              <div class="form-group">
                <label for="inputEmail4">Usuario</label>
                <input class="form-control" id="inputUsuario4" 
                placeholder="ingrese su Nombre de usuario" value={nombre}
                onChange={ function(evt) { setnombre(evt.target.value) } }/>
                <br></br>
                <label for="inputEmail4">Email</label>
                <input type="email" class="form-control" id="inputEmail4" placeholder="ingrese su G-mail"
                //Cuando ponemos value = email, guardamos lo que escribimos en aquella variable
                value={ email }
                //onChange es una funcion propia del react q permite ingresar el VALOR en el formulario
                //el "evt" es un objeto que tiene informacion del VALOR
                onChange={ function(evt) { setemail(evt.target.value) } }/>
                
                <small id="emailHelp" class="form-text text-muted">
                    No compartiremos tu correo a nadie mas
                </small>
                <br></br><br></br>
                
                <label for="inputPassword4">Password</label>
                <input type="password" class="form-control" id="inputPassword4" placeholder="ingrese su contraseña"
                value={ contra }
                onChange={ function(evt) { setcontra(evt.target.value) } }/>
            
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck"/>
                    <label class="form-check-label" for="gridCheck">Recuerdame</label>
                </div>

              </div>
             </div>
             <br></br>
                <div className="col-auto text-center">
                    <button type="submit" className="btn btn-primary" onClick={SubirRecord}>Crear cuenta</button> 
                </div>
             <br></br>
            </form>
            </div>

            <div className="col-md-4"></div>
    </div>
    </div>

}
export default PaginaRecord