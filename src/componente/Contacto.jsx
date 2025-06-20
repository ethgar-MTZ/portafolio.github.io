import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function Contacto() {
    return (
        <Row py={5} id={"contacto"}>

            <Col lg={10} md={12}  className="text-center mx-auto">
                <Card className="text-center">
                    <Card.Header>información de contacto</Card.Header>
                    <Card.Body>
                        <Card.Title>Edgar A. Martínez H.</Card.Title>
                        <Card.Text>
                            Desarrollador Web Full Stack<br />
                            Email: ethgar.mtz@gmail.com<br />
                            Teléfono: +52 834 351 94 58<br />
                            WhatsApp: +52 834 351 94 58<br />
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">Lunes a Viernes de 8:00AM a 7:00PM | Sábados de 9:00AM a 6:00PM</Card.Footer>
                </Card>
            </Col>
        </Row>
    );
}

export default Contacto;