import React, { useEffect, useState } from "react";

export function EjercicioR72() {
  const [peliculas, setPeliculas] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/peliculas")
      .then((Response) => Response.json())
      .then((peliculas) => setPeliculas(peliculas));
  }, []);
  console.log(peliculas);
  return (
    <div>
      {peliculas &&
        peliculas.map((datos) => {
          return (
            <div>
              <p>nombre: {datos.nombre}</p>
              <p>id: {datos.id}</p>
              <p>director: {datos.director} </p>
              <p>clasificacion: {datos.clasificacion}</p>
            </div>
          );
        })}
    </div>
  );
}
