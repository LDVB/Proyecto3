import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import eventsService from '../../services/events.service'
import { Container, Row, Col, Button } from 'react-bootstrap'
import EditEventForm from '../../components/EditEventForm/EditEventForm'
import { useContext } from 'react'
import { AuthContext } from "../../context/auth.context"
import AsisstantsList from '../../components/AssistantsList/AssistantList'


function EventDetailsPage() {

    const [eventDetails, setEventDetails] = useState({})
    const [eventAssitantsArr, setEventAssistansArr] = useState()
    const [isAssisting, setIsAssisting] = useState(false)
    const { id } = useParams()
    const { user } = useContext(AuthContext)

    useEffect(() => {
        eventsService
            .getOneEvent(id)
            .then(({ data }) => {
                setEventDetails(data)
                setEventAssistansArr(data.assistants)
            })
            .catch(err => console.log(err))
    }, [id])

    console.log(eventAssitantsArr);


    const navigate = useNavigate()


    const deleteEvent = () => {
        eventsService
            .deleteOneEvent(id)
            .then(() => navigate("/eventos/listado"))
            .catch(err => console.log(err))
    }

    const assistEvent = () => {
        eventsService
            .assitEvent(id)
            .then(() => console.log('asistiendo'))
            .catch(err => console.log(err))
    }

    const cancelAssistance = () => {
        eventsService
            .doNotAssistEvent(id)
            .then(() => console.log('asistiendo'))
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
                    <p> Lugar: {eventDetails.location}</p>
                    <p> Descripción: {eventDetails.description}</p>
                    <p>Assistentes:{eventAssitantsArr?.map(eachAssitant => <AsisstantsList eachAssitant={eachAssitant} />)}</p>
                </Col>
                <Col md={6}>
                    <img style={{ width: '100%' }} src={eventDetails.image} alt={eventDetails.title} />
                </Col>
            </Row>

            <Link to="/eventos/listado">
                <Button variant="light">Volver</Button>
            </Link>
            {
                user && (
                    user._id === eventDetails.owner
                ) ?
                    <Link to={`/eventos/modificar-evento/${eventDetails._id}`}>
                        <Button variant="light">Editar evento</Button>
                    </Link> : null
            }
            {
                user && user._id === eventDetails.owner &&
                <Button variant="light" onClick={deleteEvent}>Borrar evento</Button>
            }

            <Button variant="light" onClick={assistEvent}>Asistir al evento</Button>

            <Button variant="light" onClick={cancelAssistance}>Cancelar asistencia</Button>

        </Container>
    )
}

export default EventDetailsPage