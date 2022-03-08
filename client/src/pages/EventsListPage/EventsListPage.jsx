import { useState, useEffect, useContext } from 'react'
import eventsService from '../../services/events.service'
import { Container, Button } from 'react-bootstrap'
import EventsList from '../../components/EventsList/EventsList'
import { AuthContext } from './../../context/auth.context'
import { Link } from 'react-router-dom'

const EventsListPage = () => {

    const [events, setEvents] = useState([])

    const { isLoggedIn } = useContext(AuthContext)

    useEffect(() => {
        loadEvents()
    }, [])

    const loadEvents = () => {
        eventsService
            .getAllEvents()
            .then(({ data }) => setEvents(data))
            .catch(err => console.log(err))
    }

    return (
        <Container>
            <Link to="/eventos/listado">
                <EventsList events={events} />
            </Link>
            <Link to="/eventos/crear-evento">
                <Button variant="light">Crear evento</Button>
            </Link>
        </Container>


    )

}

export default EventsListPage