import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const EventCard = ({ name, date, image, _id }) => {
    return (
        <Card className="EventCard">
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Title>{date.slice(0, 10)}</Card.Title>
                <Link to={`/eventos/detalles/${_id}`}>
                    <div className="d-grid gap-2">
                        <Button variant="light">Ver detalles</Button>
                    </div>
                </Link>
            </Card.Body>
        </Card >
    )
}

export default EventCard