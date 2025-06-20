import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function CardProject({ title, description, imageUrl, viewLink, editLink, date, tecnologias }) {
    return (
        <Col>
            <Card className="shadow-sm" style={{ height: '550px' }}>
                <img
                    src={imageUrl}
                    alt={title}
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                />
                <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                        {tecnologias.map((tech, index) => (
                            <button key={index} type="button" className="btn btn-sm btn-outline-secondary">
                                <i className={tech.icon}></i> {tech.name}
                            </button>
                        ))}
                    </div>

                </div>
                <div className="card-body">
                    <p className="card-text"> {title}</p>
                    <p className="card-text"> {date}</p>
                    <p className="card-text"> {description}</p>

                </div>
            </Card>
        </Col>
    );
}

export default CardProject;