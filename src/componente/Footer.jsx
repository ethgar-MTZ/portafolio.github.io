import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Footer() {
    return (
        <footer className="bg-light text-center py-4">
            <Row>
                <Col>
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Title>EMH Desarrollos</Card.Title>
                            <Card.Text>
                                © {new Date().getFullYear()} Todos los derechos reservados. | Desarrollado con <i className="fa-brands fa-react"></i> React y <i className="fa-brands fa-bootstrap"></i> Bootstrap
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </footer>
    );
}

export default Footer;