import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

function Inicio() {
  return (
      <div className="py-5 text-center container" id={"inicio"}>
          <div className="row py-lg-5">
              <div className="col-lg-6 col-md-8 mx-auto">
                  <h1 className="fw-light">Edgar A. Martínez H.</h1>
                    <p className="lead text-muted">Desarrollador WEB Full Stack con 10 años de experiencia</p>
                    <p className="lead text-muted">Especializado en PHP, Laravel, Livewire, Codeigniter, JavaScript, MySQL, MariaDB, HTML, CSS y Bootstrap.</p>
                    <p className="lead text-muted">Apasionado por la programación y el desarrollo de software, siempre en busca de nuevos desafíos y oportunidades para aprender y crecer profesionalmente.</p>

                  <p>
                      <a href="/docs/cve-edgar-martinez.pdf" download className="btn btn-primary my-2">Descargar CV</a>
                  </p>
              </div>
          </div>

          <div className="row py-lg-5">
              <h1 className="fw-light">Tecnologías</h1>
              <div className="col-lg-6 col-md-6 mx-auto text-center">
                  <ListGroup variant="flush">
                      <ListGroup.Item action> <i className="fa-brands fa-php"></i> PHP</ListGroup.Item>
                      <ListGroup.Item action> <i className="fa-solid fa-database"></i> Mysql</ListGroup.Item>
                      <ListGroup.Item action> <i className="fa-solid fa-database"></i> MariaDB</ListGroup.Item>
                      <ListGroup.Item action> <i className="fa-brands fa-js"></i> JavaScript</ListGroup.Item>
                      <ListGroup.Item action> <i className="fa-brands fa-html5"></i> HTML</ListGroup.Item>
                      <ListGroup.Item action> <i className="fa-brands fa-css3"></i> CSS</ListGroup.Item>
                      <ListGroup.Item action> <i className="fa-brands fa-linux"></i> Linux</ListGroup.Item>
                      <ListGroup.Item action> <i className="fa-brands fa-windows"></i> Windows</ListGroup.Item>
                      <ListGroup.Item action> <i className="fa-solid fa-server"></i> Apache</ListGroup.Item>
                      <ListGroup.Item action> <i className="fa-brands fa-git"></i> Git</ListGroup.Item>
                  </ListGroup>
              </div>
              <div className="col-lg-6 col-md-6 mx-auto center">
                  <ListGroup variant="flush">
                      <ListGroup.Item action> <i className="fa-brands fa-code"></i> Codeigniter</ListGroup.Item>
                      <ListGroup.Item action> <i className="fa-brands fa-laravel"></i> Laravel</ListGroup.Item>
                      <ListGroup.Item action> <i className="fa-brands fa-laravel"></i> Livewire</ListGroup.Item>
                      <ListGroup.Item action> <i className="fa-brands fa-js"></i> JQuery</ListGroup.Item>
                      <ListGroup.Item action> <i className="fa-brands fa-js"></i> KnockoutJS</ListGroup.Item>
                      <ListGroup.Item action> <i className="fa-brands fa-js"></i> Ajax</ListGroup.Item>
                      <ListGroup.Item action> <i className="fa-brands fa-js"></i> Json</ListGroup.Item>
                      <ListGroup.Item action> <i className="fa-brands fa-bootstrap"></i> Bootstrap</ListGroup.Item>
                      <ListGroup.Item action> <i className="fa-solid fa-database"></i> DDL</ListGroup.Item>
                      <ListGroup.Item action> <i className="fa-solid fa-database"></i> DML</ListGroup.Item>
                  </ListGroup>
              </div>
          </div>


      </div>

  );
}

export default Inicio;


