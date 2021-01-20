import React, { useState, useEffect } from 'react'
import {Trivia} from "./Trivia"
import "../styles/trivia.css"

import  { resultados }  from '../answers-questions/preguntas_respuestas'


export const Pagina = () => {
    const [state, setstate] = useState(true)
    const [numero, setNumero] = useState(0);

    useEffect(() => {
        console.log("Entro al useefecct de Pagina");
        setstate(true);
        
    }, [state])

    const aumentar = () =>{
        setNumero(numero+1);
        setstate(false);
    }

    console.log("Se renderizo la PAGINA");
    
    return (
        <div className="cuerpo">          
            { state && ( (numero+1) !==7 ? <Trivia valor={numero} funcion={aumentar}/> : 
            <div> El juego termino !!!! <p>Respondiste un total de { resultados.cant_res_correc } preguntas correctamente </p></div>)  }           
        </div> 
    )
}
