import { useState, useEffect, useContext } from 'react'
import eventsService from '../../services/events.service'
import { Container, Button } from 'react-bootstrap'
import EventsList from '../../components/EventsList/EventsList'
import EventCard from '../../components/EventCard/EventCard'
import NewEventForm from '../../components/NewEventForm/NewEventForm'
import EditEventForm from '../../components/EditEventForm/EditEventForm'
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
            <h1>EVENT LIST PAGE</h1>
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