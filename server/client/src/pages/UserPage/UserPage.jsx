
<<<<<<< HEAD
import { Row, } from 'react-bootstrap'
=======
import { Button, Card, Container, Row, Col } from 'react-bootstrap'
>>>>>>> fa85447b980d1f7c723477f147c7382edec5e066
import authService from "../../services/auth.service"
import EventsService from '../../services/events.service'
//importar el service de material también
import { useNavigate, Link } from 'react-router-dom'
import { AuthContext } from '../../context/auth.context'
import { useContext } from 'react'
<<<<<<< HEAD
import Material from '../../components/MaterialCard/Material'
=======

import materialImage from './material.png'
import networkingImage from './networking.jpeg'
>>>>>>> fa85447b980d1f7c723477f147c7382edec5e066

const UserPage = () => {

    const { user, logOutUser } = useContext(AuthContext)
<<<<<<< HEAD
    
    return (
        <>
            {
                user && 
                <p>
=======
    console.log("ha entrado a la vista del usuario")

    return (
        <>
            {
                user && <p>
>>>>>>> fa85447b980d1f7c723477f147c7382edec5e066
                    <h1> ¡Bienvenid@, {user.username} :)!</h1>
                </p>
            }
            <Row xs={1} md={2} className="g-6 justify-content-center">

<<<<<<< HEAD
                <Material/>
=======
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
>>>>>>> fa85447b980d1f7c723477f147c7382edec5e066

            </Row>

        </>
    )
}

export default UserPage

