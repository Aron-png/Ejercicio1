import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
function InfoPlato() {
    const location = useLocation()//Util para obtener info de Datos
    const [listaIngredientes, setlistaIngredientes] = useState([])
    const [listaPasos, setListaPasos] = useState([])

    //Obtener objetos
    const obtenerIngredientesAsyncAwait = async function(idPlato){
        
        try {
            const response = await fetch(`http://127.0.0.1:8000/ejercicio1/ingredientes?plato=${idPlato}`)
            const data = await response.json()//Se obtiene la data en forma de objeto
            
            if(data.error === ""){
                setlistaIngredientes(data.ingredientes)//Variable de estado
            }else{
                console.error(data.error)
            }
            
        }catch(error) {
            console.error("Error obteniendo ingredientes")
        }
    }

    const obtenerPasosAsyncAwait = async function(idPlato){
        
        try {
            const response = await fetch(`http://127.0.0.1:8000/ejercicio1/pasos?plato=${idPlato}`)
            const data = await response.json()//Se obtiene la data en forma de objeto
            
            if(data.error === ""){
                setListaPasos(data.Pasos)//Variable de estado
            }else{
                console.error(data.error)
            }
            
        }catch(error) {
            console.error("Error obteniendo Pasos")
        }
    }
    useEffect(function(){
        obtenerIngredientesAsyncAwait(location.state.idplato)
        obtenerPasosAsyncAwait(location.state.idplato)
    },[])
    console.log("listaIngredientes",listaIngredientes)
    console.log("listaPasos", listaPasos)

    //Transformar datos de objetos a arrays
    const ingredientes = []
    const pasos = []
    listaIngredientes.forEach(function(ingrediente){
        ingredientes.push({
            "nombre":ingrediente.nombre
        })
    })
    console.log("ingredientes",ingredientes)

    listaPasos.forEach(function(paso){
        pasos.push({
            "numero_paso":paso.numero_paso,
            "descripcion":paso.descripcion
        })
    })
    console.log("pasos",pasos)
    
    const listarow = []//Lista de filas
    const listacol = []//Lista de columnas
    const listacol2 = []//Lista de columnas 2

    for(let i = 0; i < ingredientes.length; i++){
        listacol.push(
              <div class="list-group">
                <label class="list-group-item">
                  <input class="form-check-input me-1" type="checkbox" value=""/>
                  {ingredientes[i].nombre}
                </label>
              </div>      
        )
    }

    for(let i = 0; i < pasos.length; i++){
        listacol2.push(
        <div class="list-group">
            <button type="button" class="list-group-item list-group-item-action">
            <div>
            <p class="font-monospace">Paso {pasos[i].numero_paso}</p>
            <p class="lh-base">{pasos[i].descripcion}</p>
            </div>
            </button>
        </div>
        )
    }
  
    listarow.push(
            <article className='ITEMcard'>
            <h3><p class="text-start">Ingredientes</p></h3>
            <br></br>
            <div className="row">
            <div className="col-md-6">
               {listacol}
            </div>
            <div className="col-md-6">
                 <img src={location.state.link}
            className="ccard-img-top img-fluid" 
            alt="..." />
            </div>
            </div>
            </article>
    )
    listarow.push(
            <article className='ITEMcard'>
            <h3><p class="text-start">¿Como prepararlo?</p></h3>
            <br></br>
            {listacol2}
            </article>
    )

    //Para que nadie se pegue en top ni en bot por 4 unidades.<div className="mt-4 mb-4">
    return <div className="mt-4 mb-4">
        <div>
            {
                ////Con el state podemos enviar un objeto javaScript, visto en componentes/ValorPlato
            }
            <p class="fs-1 text-center">{location.state.nombre}: Degustame!</p>
        </div>
        <br></br>
        <div className='ITEMcarrouselE'>{listarow}</div>
        </div>
}
export default InfoPlato