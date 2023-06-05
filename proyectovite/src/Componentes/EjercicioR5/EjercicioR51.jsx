import { useState } from "react";
import "./EjercicioR51.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [errorNombre, setErrorNombre] = useState("");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeNombre = (e) => {
    if (e.target.validationMessage !== "") {
      setErrorNombre("Ingresar solamente valores alfabéticos");
    } else {
      setErrorNombre("");
    }
    setNombre(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Los datos se han enviado al servidor. El email es: ${email} y la contraseña es: ${password} y el nombre es: ${nombre}`
    );
  };

  return (
    <div className="App">
      <div className="contenedor">
        <form onSubmit={handleSubmit}>
          <h2>Iniciar sesión</h2>
          <br />
          <label htmlFor="Correo">
            <p>Email *</p>
            <input type="email" name="Correo" onChange={onChangeEmail} />
            <br />
          </label>
          <br />
          <label htmlFor="Nombre">
            <p>Nombre *</p>
            <input
              type="text"
              name="Nombre"
              onChange={onChangeNombre}
              pattern={"^[A-Za-z]+$"}
            />
            {errorNombre !== "" ? <div>{errorNombre}</div> : null}
            <br />
          </label>
          <br />
          <label htmlFor="Password">
            <br />
            <p>Password *</p>
            <input
              type="password"
              name="Password"
              minLength={8}
              onChange={onChangePassword}
            />
            <br />
          </label>
          <br />
          <button className="button" type="submit">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
