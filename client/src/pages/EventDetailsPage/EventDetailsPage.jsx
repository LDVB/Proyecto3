import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import eventsService from '../../services/events.service'
import { Container, Row, Col, Button } from 'react-bootstrap'
import EditEventForm from '../../components/EditEventForm/EditEventForm'


function EventDetailsPage() {

    const [eventDetails, setEventDetails] = useState({})
    const { id } = useParams()

    useEffect(() => {
        eventsService
            .getOneEvent(id)
            .then(({ data }) => {
                setEventDetails(data)
            })
            .catch(err => console.log(err))
    }, [id])

    const navigate = useNavigate()


    const deleteEvent = () => {
        eventsService
            .deleteOneEvent(id)
            .then(() => navigate("/eventos/listado"))
            .catch(err => console.log(err))
    }

    return (
        <Container>
            <h1>Detalles del evento</h1>
            <hr />
            <Row>
                <Col md={{ span: 4, offset: 1 }}>
                    <h3>{eventDetails.name}</h3>
                    <p>Fecha:{eventDetails.date?.slice(0, 10)}</p>
                    <h3>Lugar:{eventDetails.location}</h3>
                    <p>{eventDetails.description}</p>

                </Col>
                <Col md={6}>
                    <img style={{ width: '100%' }} src={eventDetails.image} alt={eventDetails.title} />
                </Col>
                <Link to="/eventos/listado">
                    <Button variant="light">Volver</Button>
                </Link>

                <Link to={`/eventos/modificar-evento/${eventDetails._id}`}>
                    <Button variant="light">Editar evento</Button>
                </Link>

                {/* <comentarios/> */}

                <Button variant="light" onClick={deleteEvent}>Borrar evento</Button>
            </Row>

        </Container>
    )
}

export default EventDetailsPage