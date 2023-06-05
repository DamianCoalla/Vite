import React, { useState } from 'react'
import "./Ejercicio3.css"

function Ejercicio3() {
    const [cuenta , Setcount] = useState (0);
    

  return (
    <div>
            <button onClick={() => Setcount ((cuenta) =>  cuenta + 1)} className='boton'>+</button>
            <button onClick={()=> Setcount ((cuenta) =>  cuenta - 1)} className='boton'>-</button>
            <div className='contenedor'><div>Total</div>
            <div>  {cuenta}</div>
            </div>
    </div>
  )
}

export default Ejercicio3