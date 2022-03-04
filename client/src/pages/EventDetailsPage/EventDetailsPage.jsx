import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import eventsService from '../../services/events.service'
import { Container, Row, Col, Button } from 'react-bootstrap'

function EventDetailsPage() {

    const [eventDetails, setEventDetails] = useState({})
    const { event_id } = useParams()

    useEffect(() => {
        eventsService
            .getOneEvent(event_id)
            .then(({ data }) => setEventDetails(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <Container>
            <h1>Detalles del evento</h1>
            <hr />
            <Row>
                <Col md={{ span: 4, offset: 1 }}>
                    <h3>{eventDetails.name}</h3>
                    <p> Fecha:{eventDetails.date}</p>
                    <h3>Lugar: {eventDetails.location}</h3>
                    <p>{eventDetails.image}</p>
                    <p>{eventDetails.description}</p>
                </Col>
                {/* <Col md={6}>
                    <img style={{ width: '100%' }} src={eventDetails.image} alt={eventDetails.title} />
                </Col> */}
                <Link to="/eventos/listado">
                    <Button variant="light">Volver</Button>
                </Link>
            </Row>

        </Container>
    )
}

export default EventDetailsPage