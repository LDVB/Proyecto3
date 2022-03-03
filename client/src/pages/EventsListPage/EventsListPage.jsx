import { useState, useEffect, useContext } from 'react'
import eventsService from '../../services/events.service'
import { Container, Modal } from 'react-bootstrap'
import EventsList from '../../components/EventsList/EventsList'
import EventCard from '../../components/EventCard/EventCard'
import NewEventForm from '../../components/NewEventForm/NewEventForm'
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

    //pendiente hacer el return de lo que tiene que renderizar
    // añadir botón crear evento
    // añadir componente EventList
    return (
        <>
            <h1>HOLA</h1>
            <Link to="/eventos/crear-evento">
                crear nuevo evento
            </Link>

        </>

    )



}

export default EventsListPage