import TopNav from '../global/TopNav';

function Pagina_Inicio(){
    return <div>
        <body>
{//Para que nadie se pegue en top ni en bot por 4 unidades.<div className="mt-4 mb-4">
        //Lo de abajo es <style> es el estilo improvisado
        /*
        <div className="row">
            <div className="column col-md-6">
                <t>espacio</t>
            </div>
            <div className="column col-md-6">
                <t>espacio</t>
            </div>
        </div>
        <br></br>
        */
}
        <style>{'body { background-color: #FDE501; }'}</style>
        <TopNav category={2}/>
        
            
        </body>        
    </div>
}
export default Pagina_Inicio