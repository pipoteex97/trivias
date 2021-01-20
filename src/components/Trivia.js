import React, { useState } from 'react'
import  { preguntas, resultados }  from '../answers-questions/preguntas_respuestas'
import "../styles/trivia.css"

export const Trivia = ( {valor, funcion} ) => {
    
    const [bandera, setBandera] = useState(false);
    const [state, setstate] = useState(true)
    const [check, setcheck] = useState(false)
    const [total, settotal] = useState(0);

    const info = preguntas[valor];
    console.log("Se renderizo la TRIVIA");
    const comprobar = (e) =>{
        if(e.target.name === info.veradero){
            setBandera(true);
            console.log("Correcto");
            e.target.classList.add("correcto", "animate__animated","animate__shakeY");   
            setcheck(true);
            settotal(total+1);
            resultados.cant_res_correc=valor;
        }else{
            e.target.classList.add("incorrecto", "animate__animated", "animate__headShake");
            setBandera(true);
            setstate(false);
            setcheck(true);
        }   
    }

    return (
        <div className="cuadro_principal animate__animated animate__flipInX">
            <h2>Pregunta numero: { valor+1 }</h2>
            <div name="pregunta">  <h3> { info.pre } </h3> </div>
            <button name="uno" className="boton_respuesta" onClick={ comprobar } disabled={check}> { info.uno } </button>
            <button name="dos" className="boton_respuesta" onClick={ comprobar } disabled={check}>  { info.dos } </button>
            <button name="tres" className="boton_respuesta" onClick={ comprobar } disabled={check}>  { info.tres } </button>       

            { bandera && ( state ? <div> <p>Bien hecho!!! </p>
                <button className="boton_continuar" onClick={ funcion } > Continuar...</button>
                        </div> :  <div> <p> Upsss te equivocaste...</p>
                <button className="boton_continuar" onClick={ funcion }> Continuar...</button>
                        </div> ) }
                
        </div>   
    )
}
