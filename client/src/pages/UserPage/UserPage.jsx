
import { Button, Card, Container, Row, Col } from 'react-bootstrap'
import authService from "../../services/auth.service"
import EventsService from '../../services/events.service'
//importar el service de material también
import { useNavigate, Link } from 'react-router-dom'
import { AuthContext } from '../../context/auth.context'
import { useContext } from 'react'

import materialImage from './material.png'
import networkingImage from './networking.jpeg'

const UserPage = () => {

    const { user, logOutUser } = useContext(AuthContext)
    console.log("ha entrado a la vista del usuario")

    return (
        <>
            {
                user && <p>
                    <h1> ¡Bienvenid@, {user.username} :)!</h1>
                </p>
            }
            <Row xs={1} md={2} className="g-6 justify-content-center">

                <Col lg={3}>
                    <Card as={Link} to="/eventos/listado" style={{ textDecoration: 'none' }}>
                        <Card.Img variant="top" src={networkingImage} />
                        <Card.Body>
                            <Card.Title>Networking</Card.Title>
                            <Card.Text>
                                Crea eventos y conecta con otros emprendedores
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </Col>

                <Col lg={3}>
                    <Card as={Link} to="/material/listado">
                        <Card.Img variant="top" src={materialImage} />
                        <img src="./material.png" />
                        <Card.Body>
                            <Card.Title>Material</Card.Title>
                            <Card.Text>
                                Aquí podrás encontrar los mejores libros y espacios de coworking
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>

        </>
    )
}

export default UserPage

