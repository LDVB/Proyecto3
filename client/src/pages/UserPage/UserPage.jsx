
import { Row, } from 'react-bootstrap'
import authService from "../../services/auth.service"
import EventsService from '../../services/events.service'
//importar el service de material también
import { useNavigate, Link } from 'react-router-dom'
import { AuthContext } from '../../context/auth.context'
import { useContext } from 'react'
import Material from '../../components/MaterialCard/Material'

const UserPage = () => {

    const { user, logOutUser } = useContext(AuthContext)
    
    return (
        <>
            {
                user && 
                <p>
                    <h1> ¡Bienvenid@, {user.username} :)!</h1>
                </p>
            }
            <Row xs={1} md={2} className="g-6 justify-content-center">

                <Material/>

            </Row>

        </>
    )
}

export default UserPage

