
import { Card, Container, Row, Col } from 'react-bootstrap'
import { AuthContext } from '../../context/auth.context'
import { useContext } from 'react'
import { useEffect, useState } from 'react'
import MaterialCard from "../../components/MaterialCard/MaterialCard"
import userService from "../../services/user.service"
import { useParams } from 'react-router-dom'


const UserPage = () => {

    const { user_id } = useParams()

    const { user, logOutUser } = useContext(AuthContext)

    console.log("ha entrado a la vista del usuario")

    const [userInformation, setUserInformation] = useState({})

    useEffect(() => {
        user_id ? userService
            .getOneUserById(user_id)
            .then(({ data }) => setUserInformation(data))
            .catch(err => console.log(err))

            :

            user && userService
                .getOneUserById(user._id)
                .then(({ data }) => setUserInformation(data))
                .catch(err => console.log(err))

    }, [user, user_id])

    return (
        <>
            <Row xs={1} md={2} className="g-6 justify-content-center">
                <MaterialCard />
                <Card className="UserCard">
                    <Card.Img variant="top" src={userInformation.image} />
                    <Card.Body>
                        <Card.Title> Nombre:{userInformation.username}</Card.Title>
                        <Card.Title> Nivel:{userInformation.level}</Card.Title>
                        <Card.Title> Edad:{userInformation.age}</Card.Title>
                        <Card.Title> Linkedin:{userInformation.linkedin}</Card.Title>
                        <Card.Title> Sobre el usuario:{userInformation.description}</Card.Title>
                    </Card.Body>
                </Card >
            </Row>
        </>
    )
}

export default UserPage