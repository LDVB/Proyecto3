import { Button, Card, Container, Row, Col } from 'react-bootstrap'
import authService from "../../services/auth.service"
import EventsService from '../../services/events.service'
import MaterialService from '../../services/material.service'
import { useNavigate, Link } from 'react-router-dom'
import { AuthContext } from '../../context/auth.context'
import { useContext } from 'react'
// import userService from '../../services/user.service'
import { useEffect, useState } from 'react'
import MaterialCard from "../../components/MaterialCard/MaterialCard"


const UserPage = () => {

    const { user, logOutUser } = useContext(AuthContext)

    // const [userInformation, setUserInformation] = useState({})

    // useEffect(() => {
    //     userService
    //         .getOneUser(user)
    //         .then(({ data }) => setUserInformation(data))
    //         .catch(err => console.log(err))

    // }, [user])

    return (
        <>
            {
                user && <p>
                    <h1 className="welcome"> ¡Bienvenid@, {user.username} :)!</h1>

                </p>
            }
            {/* 
            <Container>
                <hr />
                {/* <Row>
                    <Col md={{ span: 4, offset: 1 }}>
                        <h3>{userInformation?.username}</h3>
                        <img style={{ width: '100%' }} src={userInformation.avatar} alt="imagen de usuari@" />
                        <p>Nivel :{userInformation.level} </p>
                        <p>LinkedIn: {userInformation.linkedIn} </p>
                        <p>Sobre mí: {userInformation.description} </p>
                    </Col>
                </Row> */}
            {/* </Container>  */}
            
            <Row xs={1} md={2} className="g-6 justify-content-center">

                <MaterialCard />

            </Row>


        </>
    )
}

export default UserPage