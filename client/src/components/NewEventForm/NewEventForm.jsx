import { useState, useContext } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/auth.context'
import eventsService from '../../services/events.service'

const NewEventForm = () => {

    const [eventData, setEventData] = useState({
        name: '',
        date: '',
        location: '',
        image: '',
        description: ''
    })

    const { name, date, location, image, description } = eventData

    const { getToken } = useContext(AuthContext)

    const navigate = useNavigate()

    const handleInputChange = e => {

        const { value, name } = e.target

        setEventData({
            ...eventData,
            [name]: value
        })
    }

    const handleSubmit = e => {

        e.preventDefault()

        const token = getToken();

        console.log(token)

        eventsService
            .createEvent(eventData, token)
            .then((response) => console.log("se ha creado el evento", response.data))
            .then(() => navigate("/"))
            .catch(err => console.log(err))
    }

    return ( // añadir container y row 
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="title">
                <Form.Label>Nombre del evento</Form.Label>
                <Form.Control type="text" value={name} onChange={handleInputChange} name="name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="date">
                <Form.Label>Fecha del evento</Form.Label>
                <Form.Control type="date" value={date} onChange={handleInputChange} name="date" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="location">
                <Form.Label>Lugar</Form.Label>
                <Form.Control type="text" value={location} onChange={handleInputChange} name="location" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="image">
                <Form.Label>Imagen</Form.Label>
                <Form.Control type="file" value={image} onChange={handleInputChange} name="image" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Descripción</Form.Label>
                <Form.Control type="text" value={description} onChange={handleInputChange} name="description" />
            </Form.Group>

            <div className="d-grid gap-2">
                <Button variant="light" type="submit">Crear evento</Button>
            </div>

        </Form >
    )

}

export default NewEventForm