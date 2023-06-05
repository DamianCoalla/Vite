import React, { useState } from "react";

function Ejercicio2() {
  const [azul, setAzul] = useState(false);
  const [rojo, setRojo] = useState(false);

  const botonAzul = () => {
    setAzul(!azul);
  };
  const botonRojo = () => {
    setRojo(!rojo);
  };

  return (
    <div>
      <button onClick={botonAzul}>AZUL</button>
      <button onClick={botonRojo}>ROJO</button>
      {azul ? <div> se ha hecho clic en el boton azul </div> : null}
      {rojo ? <div> se ha hecho clic en el boton rojo </div> : null}
    </div>
  );
}

export default Ejercicio2;
