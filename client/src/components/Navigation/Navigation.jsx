import { useContext } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../context/auth.context'



const Navigation = () => {

    const { user, logOutUser } = useContext(AuthContext)

    return (
        <Navbar bg="light" variant='light' expand="lg" style={{ marginBottom: 30 }}>
            <Container>
                <NavLink to="/">
                    <Navbar.Brand as="span">KICK OFF</Navbar.Brand>
                </NavLink>
                <NavLink to="/registro">
                    <Nav.Link as="span">Registro</Nav.Link>
                </NavLink>
                <NavLink to="/inicio-sesion">
                    <Nav.Link as="span">Iniciar sesión</Nav.Link>
                </NavLink>
                <NavLink to="/" onClick={() => logOutUser()}>
                    <Nav.Link as="span">Cerrar sesión</Nav.Link>
                </NavLink>
            </Container>
        </Navbar >
    )

}

export default Navigation