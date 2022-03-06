import { Row, Col } from 'react-bootstrap'
import EventCard from '../EventCard/EventCard'
import LoadingSpinner from './../LoadingSpinner/LoadingSpinner'


const EventsList = ({ events }) => {

    return (

        <>
            <h1> EVENT LIST COMPONENTE</h1>
            {events.length
                ?
                <Row>
                    {events.map(event => {
                        return <Col md={4} key={event._id}> <EventCard {...event} /> </Col>
                    })}
                </Row>
                :
                <LoadingSpinner />

            }

        </>

    )
}

export default EventsList
