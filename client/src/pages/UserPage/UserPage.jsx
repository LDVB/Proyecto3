
import { Card, Container, Row, Col } from 'react-bootstrap'
import { AuthContext } from '../../context/auth.context'
import { useContext } from 'react'
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

