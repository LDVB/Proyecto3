import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const EventCard = ({ name, date, location, image, description, _id }) => {
    return (
        <Card className="EventCard">
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Title>{location}</Card.Title>
                <Link to={`/detalles/${_id}`}>
                    <div className="d-grid gap-2">
                        <Button variant="light">Ver detalles</Button>
                    </div>
                </Link>
            </Card.Body>
        </Card >
    )
}

export default EventCard