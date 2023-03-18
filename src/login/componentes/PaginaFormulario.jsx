import { useState } from "react"

function PaginaFormulario(props){
    //Guardar datos de forma "especial", lo ve como un objeto
    const [usuario, setUsuario] = useState("")
    const [password, setPassword] = useState("")
    
    //Se activa la funcion de verificar los datos ingresados
    const butOnClick = function() {
        props.onLoginOk(usuario, password)
        console.log("Mapeado Usuario:", usuario)
        console.log("Mapeado Password:", password)
    }
    return <form>
        <div className="form-row">
            <div class="form-group">
                <label for="inputEmail4">Email</label>
                <input type="email" class="form-control" id="inputEmail4" placeholder="ingrese su G-mail"
                //Cuando ponemos value = usuario, guardamos lo que escribimos en aquella variable
                value={ usuario }
                //onChange es una funcion propia del react q permite ingresar el VALOR en el formulario
                //el "evt" es un objeto que tiene informacion del VALOR
                onChange={ function(evt) { setUsuario(evt.target.value) } }/>
                <small id="emailHelp" class="form-text text-muted">
                    No compartiremos tu correo a nadie mas
                </small>
                <br></br><br></br>
                <label for="inputPassword4">Password</label>
                <input type="password" class="form-control" id="inputPassword4" placeholder="ingrese su contraseña"
                value={ password }
                onChange={ function(evt) { setPassword(evt.target.value) } }/>
            
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck"/>
                    <label class="form-check-label" for="gridCheck">Recuerdame</label>
                </div>
            </div>
            {
            //mt-2=espaciado hacia arriba mt = t de top
            //s es izq y e es der
            //onClick = registra la funcion butOnClick cuando se haga click al boton
            }
            <br></br>
            <div className="text-center">
                <button className="btn btn-success mt-2" type="button"
                onClick={ butOnClick }>
                Ingresar
                </button>
            </div>


        </div>
        
        
    </form>

}
export default PaginaFormulario