import React, { useState } from "react";
import "Ejercicio2.css";

function Ejercicio3() {
  const [modalVisible, setModalVisible] = useState(false);
  const alternarModal = () => {
    setModalVisible(!modalVisible);

    /*     modalVisible
      ? console.log()
      : console.log("en modal no esta visible"); */
  };

  /* const botonAbrir = () => {
    {
      props.modalVisible ? modalVisible : !modalVisible;
    }
  }; */

  return (
    <body id="gridContainer">
      <nav
        id="header"
        class="navbar bg-body-tertiary fixed-top navbar-expand-md"
      >
        <div class="container-fluid">
          <section class="logo-box-top">
            <img
              class="logo-verde"
              src="Materiales/logo-verde.png"
              alt="logo-verde"
            />
            <h4>Flex</h4>
          </section>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <section class="logo-box-top">
                <img
                  class="logo-verde"
                  src="Materiales/logo-verde.png"
                  alt=""
                />
                <h4>Flex</h4>
              </section>
              <button
                onClick={alternarModal}
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-center flex-grow-1 pe-3 order-first">
                <li class="nav-item">
                  <a class="nav-link" href="#main">
                    Producto
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#characteristics">
                    Características
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#prices">
                    Precios
                  </a>
                </li>
              </ul>
              <div class="navbar-nav ms-auto order-last">
                <li class="nav-item mx-2 mb-2">
                  <a
                    onClick={alternarModal}
                    id="boton-ingresar"
                    class="nav-link btn btn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    href="#"
                  >
                    Ingresar
                  </a>
                </li>
                <li class="nav-item">
                  <a id="boton-registrarse" class="nav-link btn btn" href="#">
                    Registrarse
                  </a>
                </li>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {modalVisible ? (
        <div id="Modal-box" class="modal">
          <div class="modal-content">
            <span class="close">&times;</span>
            <section id="form-section">
              <section class="logo-box-modal">
                <img
                  class="logo-blanco"
                  src="Materiales/logo-blanco.png"
                  alt="logo-blanco"
                />
              </section>
              <section class="modal-title-section">
                <h4 class="modal-title">Ingresa a tu cuenta</h4>
                <p class="modal-title-p">y empieza a conseguir resultados</p>
              </section>
              <form id="form" action="" autocomplete="off">
                <section class="input-section">
                  <label for="correo">Correo</label>
                  <input class="input" type="text" id="correo" name="correo" />
                  <p id="correo-error"></p>
                </section>
                <section class="input-section">
                  <label for="contraseña">Contraseña</label>
                  <input
                    class="input"
                    type="password"
                    id="contraseña"
                    name="contraseña"
                  />
                  <p id="contraseña-error"></p>
                </section>
                <section class="checkbox-section">
                  <section class="checkbox-item">
                    <input type="checkbox" id="myCheckbox" />
                    <label for="myCheckbox">Recordarme</label>
                  </section>
                  <p>Olvidé mi contraseña</p>
                </section>
                <button id="button-enviar" class="btn btn" type="submit">
                  Ingresar
                </button>
                <p class="aun-p">
                  Aún no tienes cuenta?
                  <a href="" class="registrate">
                    Regístrate
                  </a>
                </p>
              </form>
            </section>
          </div>
        </div>
      ) : null}
      <div id="main">
        <div id="main-left">
          <h6 id="nuevo">Nuevo</h6>
          <h1 id="main-titulo">La plataforma para las empresas del futuro</h1>
          <p id="main-parrafo">
            Productos pensados para los negocios del próximo siglo
          </p>
          <section>
            <button id="button-demo" class="btn btn">
              Solicitar demo
            </button>
            <button id="button-registrarse-2" class="btn btn">
              Registrarse
            </button>
          </section>
        </div>
        <div id="main-rigth">
          <img id="main-img" src="Materiales/header.jpg" alt="imagen-main" />
          <img src="Materiales/circle3-yellow.svg" class="circulo-amarillo" />
        </div>
      </div>
      <div id="characteristics">
        <section class="characteristics-section">
          <section class="charasteristic-card">
            <img
              src="Materiales/mail-icon.svg"
              class="icon-characteristics"
              alt=""
            />
          </section>
          <section>
            <h5 class="characteristics-card-title">Capacitación</h5>
            <p>Asistencia y capacitacíon de primer nivel</p>
          </section>
        </section>
        <section class="characteristics-section">
          <section class="charasteristic-card">
            <img
              src="Materiales/analytics-icon.svg"
              class="icon-characteristics"
              alt=""
            />
          </section>
          <section>
            <h5 class="characteristics-card-title">Analíticas claras</h5>
            <p>Disfrutá de un dashboard de analíticas claras y accionables</p>
          </section>
        </section>
        <section class="characteristics-section">
          <section class="charasteristic-card">
            <img
              src="Materiales/people-icon.svg"
              class="icon-characteristics"
              alt=""
            />
          </section>
          <section>
            <h5 class="characteristics-card-title">Soluciones para equipos</h5>
            <p>
              Facilitá el accionar de tu empresa con nuestro suite de
              herramientas
            </p>
          </section>
        </section>
      </div>
      <div id="prices">
        <h4 id="prices-title">Precios flexibles que escalan contigo</h4>
        <p>
          Nuestra factuación se ajusta al tamaño de tu empresa. Tiempo de prueba
          de 7 días en todos nuestros planes.
        </p>
        <div id="price-card">
          <section class="prices-basic">
            <h6 class="card-title">Precio</h6>
            <h5 class="card-title">Plan básico</h5>
            <h3>$ 10/mes</h3>
            <p>
              <b>Facturado anualmente</b>
            </p>
            <section>
              <ul>
                <li class="li-icon">1 GB de almacenamiento.</li>
                <li class="li-icon">Dashboard completo.</li>
                <li class="li-icon">Asistencia por correo.</li>
                <li class="li-icon">Hasta 10 miembros.</li>
              </ul>
            </section>
            <button id="card-btn-1" class="btn btn">
              Solicitar demo
            </button>
          </section>
          <section class="prices-basic">
            <h6 class="card-title">Precio</h6>
            <h5 class="card-title">Plan freelancer</h5>
            <h3>$ 99/mes</h3>
            <p>
              <b>Facturado anualmente</b>
            </p>
            <section>
              <ul>
                <li class="li-icon">Características básicas.</li>
                <li class="li-icon">Asistencia preferencial.</li>
                <li class="li-icon">100 GB de almacenamineto.</li>
                <li class="li-icon">Hasta 100 miembros.</li>
              </ul>
            </section>
            <button id="card-btn-2" class="btn btn">
              Solicitar demo
            </button>
          </section>
          <section class="prices-basic">
            <h6 class="card-title">Precio</h6>
            <h5 class="card-title">Plan empresas</h5>
            <h3>$ 799/mes</h3>
            <p>
              <b>Facturado anualmente</b>
            </p>
            <section>
              <ul>
                <li class="li-icon">Características freelancer.</li>
                <li class="li-icon">1 TB de almacenamineto.</li>
                <li class="li-icon">Asistencia telefónica 24/7.</li>
                <li class="li-icon">Miembros ilimitados.</li>
              </ul>
            </section>
            <button id="card-btn-3" class="btn btn">
              Solicitar demo
            </button>
          </section>
        </div>
      </div>
      <footer id="footer">
        <section class="logo-box">
          <a href="#main">
            <img
              class="logo-verde"
              src="Materiales/logo-verde.png"
              alt="logo-verde"
            />
          </a>
          <h4>Flex</h4>
        </section>
        <section id="a-section">
          <a class="disabled footer-text" href="">
            Producto
          </a>
          <a class="disabled footer-text" href="">
            Funcionalidades
          </a>
          <a class="disabled footer-text" href="">
            Precios
          </a>
          <a class="disabled footer-text" href="">
            Recursos
          </a>
          <a class="disabled footer-text" href="">
            Carreras
          </a>
          <a class="disabled footer-text" href="">
            Ayuda
          </a>
          <a class="disabled footer-text" href="">
            Privacidad
          </a>
        </section>
        <section>
          <p class="footer-text parrafo-footer">
            ©2023 Flex. Un producto ficticio de Senpai
          </p>
        </section>
      </footer>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.3/js/bootstrap.min.js"></script>
      <script src="integrador.js"></script>
    </body>
  );
}

export default Ejercicio3;
