import { Row, Col } from 'react-bootstrap'
import EventCard from '../EventCard/EventCard'
// import EventsList from '../EventsList/EventsList.css'

const EventsList = ({ events }) => {

    return (
        <>
            <div> LISTADO EVENTOS</div>
            {/* <Row>
                {events.map(event => {
                    return <Col md={4} key={event._id}> <EventCard {...event} /> </Col>
                })}
            </Row> */}
        </>

    )
}

export default EventsList