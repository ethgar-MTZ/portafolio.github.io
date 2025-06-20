import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardProject from './CardProject.jsx'; // Assuming you have a CardProject component
function Proyectos() {
    const projects = [
        {
            title: 'Ticketplus',
            description: 'Plataforma de gestión de tickets de servicio, registra, da seguimiento, asigna técnicos y cierra tickets de servicio. También tiene funcionalidades como generación de presupuestos, ventas de refacciones, gestión de inventario y reportes.',
            imageUrl: '/ticketplus.png',
            viewLink: '#',
            editLink: '#',
            date: '2019',
            tecnologias: [
                {
                    name: 'Laravel',
                    icon: 'fa-brands fa-laravel'
                },
                {
                    name: 'Livewire',
                    icon: 'fa-brands fa-livewire'
                },
                {
                    name: 'Bootstrap',
                    icon: 'fa-brands fa-bootstrap'
                },
                {
                    name: 'MySQL',
                    icon: 'fa-solid fa-database'
                },
                {
                    name: 'JQuery',
                    icon: 'fa-brands fa-js'
                }
            ]
        },
        {
            title: 'Sistema POS',
            description: 'Sistema de ventas para puntos de venta, permite gestionar productos, ventas, clientes y reportes. Incluye funcionalidades como gestión de inventario y reportes de ventas.',
            imageUrl: '/logo03_.png',
            viewLink: '#',
            editLink: '#',
            date: '2020',
            tecnologias: [
                {
                    name: 'Laravel',
                    icon: 'fa-brands fa-laravel'
                },
                {
                    name: 'Livewire',
                    icon: 'fa-brands fa-livewire'
                },
                {
                    name: 'Bootstrap',
                    icon: 'fa-brands fa-bootstrap'
                },
                {
                    name: 'MySQL',
                    icon: 'fa-solid fa-database'
                },
                {
                    name: 'JQuery',
                    icon: 'fa-brands fa-js'
                }
            ]
        },
        {
            title: 'Sistema de servicios',
            description: 'Sistema en el que se pretende brindar servicios para negocios de diferentes giros en los que necesiten un contro¿ol en las visitas de susu clientes, agendar citas, confirmarlas, tener un calendario para monitorear los servicios del día, etc.',
            imageUrl: '/servicios.png',
            viewLink: '#',
            editLink: '#',
            date: '2023',
            tecnologias: [
                {
                    name: 'Laravel',
                    icon: 'fa-brands fa-laravel'
                },
                {
                    name: 'Bootstrap',
                    icon: 'fa-brands fa-bootstrap'
                },
                {
                    name: 'MySQL',
                    icon: 'fa-solid fa-database'
                },
                {
                    name: 'KnockoutJS',
                    icon: 'fa-brands fa-js'
                }
            ]
        },
        {
            title: 'Administración de negocio',
            description: 'Este sistema tiene el propósito de gestionar el área de recursos humanos de la empresa. El sistema permite gestionar contrataciones, nómina, asistencia, vacaciones y reportes de empleados. también se tiene una sección para el registro de ventas, gastos e inventarios con sus respectivas gráficas de seguimiento',
            imageUrl: '/graficas.png',
            viewLink: '#',
            editLink: '#',
            date: '2025',
            tecnologias: [
                {
                    name: 'Laravel',
                    icon: 'fa-brands fa-laravel'
                },
                {
                    name: 'Bootstrap',
                    icon: 'fa-brands fa-bootstrap'
                },
                {
                    name: 'MySQL',
                    icon: 'fa-solid fa-database'
                },
                {
                    name: 'JavaScript',
                    icon: 'fa-brands fa-js'
                }
            ]
        }
    ];

    return (
        <div className="py-5 text-center container" id={'proyectos'}>
            <h2>Proyectos</h2>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {projects.map((project, index) => (
                    <Col key={index}>
                        <CardProject {...project}/>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default Proyectos;