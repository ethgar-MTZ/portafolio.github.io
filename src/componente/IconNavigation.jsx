import React from "react";

export default function IconNavigation() {
  return (
    <div className="ct" id="t1">
      <div className="ct" id="t2">
        <div className="ct" id="t3">
          <div className="ct" id="t4">
            <section>
              <ul>
                <a href="#t1"><li className="icon fa fa-user" id="uno"></li></a>
                <a href="#t2"><li className="icon fa fa-keyboard-o" id="dos"></li></a>
                <a href="#t3"><li className="icon fa fa-coffee" id="tres"></li></a>
                <a href="#t4"><li className="icon fa fa-dribbble" id="cuatro"></li></a>
              </ul>

              <div className="page" id="p1">
                <li className="icon fa fa-home">
                  <span className="title">EDGAR ABRAHAM MARTINEZ HUERTA</span>
                  <span className="hint">
                    <p>Ing. Sistemas Computacionales</p>
                    <p>Email: ethgar.mtz@gmail.com</p>
                    <p>Whatsapp: +52 8343519458</p>
                  </span>
                </li>
              </div>

              <div className="page" id="p2">
                <li className="icon fa fa-keyboard-o">
                  <span className="title">Sistema Tickets</span>
                  <pan className="hint">
                    <p>Sistema de gestión de tickets de servicio: Registra tickets de servicio, seguimiento de estatus, asignación de técnicos</p>
                    <p>generación de presupuestos, ventas de refacciónes, control de inventario y generación de reportes.</p>
                    <img src="../public/tickets.png" />
                  </pan>
                </li>
              </div>

              <div className="page" id="p3">
                <li className="icon fa fa-coffee">
                  <span className="title">Coffee</span>
                </li>
              </div>

              <div className="page" id="p4">
                <li className="icon fa fa-dribbble">
                  <span className="title">Dribbble</span>
                  <span className="hint">
                    <a href="https://dribbble.com/rupok" target="_blank" rel="noreferrer">
                      Follow me on Dribbble
                    </a>
                  </span>
                </li>
              </div>

              
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
