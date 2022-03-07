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

    

    return (
        <>
            {
                user && <p>
                    <h1 className="welcome"> ¡Bienvenid@, {user.username} :)!</h1>

                </p>
            }    
            
            <Row xs={1} md={2} className="g-6 justify-content-center">

                <MaterialCard />

            </Row>


        </>
    )
}

export default UserPage