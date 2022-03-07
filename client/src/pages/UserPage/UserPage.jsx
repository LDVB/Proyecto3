<<<<<<< HEAD

import { Card, Container, Row, Col } from 'react-bootstrap'
import { AuthContext } from '../../context/auth.context'
import { useContext } from 'react'
=======
import { Button, Card, Container, Row, Col } from 'react-bootstrap'
import authService from "../../services/auth.service"
import EventsService from '../../services/events.service'
import MaterialService from '../../services/material.service'
import { useNavigate, Link } from 'react-router-dom'
import { AuthContext } from '../../context/auth.context'
import { useContext } from 'react'
// import userService from '../../services/user.service'
>>>>>>> refs/remotes/origin/main
import { useEffect, useState } from 'react'
import MaterialCard from "../../components/MaterialCard/MaterialCard"
import userService from "../../services/user.service"
import UserCard from '../../components/UserCard/UserCard'


const UserPage = () => {

    const { user, logOutUser } = useContext(AuthContext)

    console.log("ha entrado a la vista del usuario")

    // const [userInformation, setUserInformation] = useState({})

    // const { id } = useParams()
    // const { user } = useContext(AuthContext)

    // useEffect(() => {
    //     userService
    //         .getOneUserById(id)
    //         .then(({ data }) => setUserInformation(data))
    //         .catch(err => console.log(err))

    // }, [id])


    return (
        <>
            {
                user && <p>
                    <h1 className="welcome"> ¡Bienvenid@, {user.username} :)!</h1>

                </p>
            }

            <Row xs={1} md={2} className="g-6 justify-content-center">

                <MaterialCard />
                {console.log(user)}

                <Card className="UserCard">
                    <Card.Img variant="top" src={user.image} />
                    <Card.Body>
                        <Card.Title> Nombre:{user.username}</Card.Title>
                        <Card.Title> Nivel:{user.level}</Card.Title>
                        <Card.Title> Edad:{user.age}</Card.Title>
                        <Card.Title> Linkedin:{user.linkedin}</Card.Title>
                        <Card.Title> Sobre el usuario:{user.description}</Card.Title>
                    </Card.Body>
                </Card >

            </Row>
        </>
    )
}

export default UserPage