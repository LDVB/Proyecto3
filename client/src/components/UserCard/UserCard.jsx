import { Card } from 'react-bootstrap'

const UserCard = ({ username, level, image, age, linkedin, description }) => {
    return (
        <Card className="UserCard">
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title> Nombre:{username}</Card.Title>
                <Card.Title> Nivel:{level}</Card.Title>
                <Card.Title> Edad:{age}</Card.Title>
                <Card.Title> Linkedin:{linkedin}</Card.Title>
                <Card.Title> Sobre el usuario:{description}</Card.Title>
            </Card.Body>
        </Card >
    )
}

export default UserCard