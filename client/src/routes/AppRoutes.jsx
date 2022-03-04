
import IndexPage from '../pages/IndexPage/IndexPage'
import { Routes, Route } from 'react-router-dom'
import SignupPage from '../pages/SignupPage/SignupPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import UserPage from '../pages/UserPage/UserPage'
import EventsListPage from '../pages/EventsListPage/EventsListPage'
import NewEventForm from '../components/NewEventForm/NewEventForm'
import PrivateRoute from './PrivateRoute'
import MaterialPage from '../pages/MaterialPage/MaterialPage'


const AppRoutes = () => {

    return (

        <Routes className= 'routes'>

            <Route path="/" element={<IndexPage />} />
            <Route path="/registro" element={<SignupPage />} />
            <Route path="/inicio-sesion" element={<LoginPage />} />
            <Route path="/eventos/listado" element={<EventsListPage />} />
            {/* <Route path="/eventos/detalles/:id" element={<EventDetailsPage />} /> */}
            <Route path="/eventos/crear-evento" element={<NewEventForm />} />
            <Route path="/material" element={<MaterialPage />} />


            {/* RESTO DE RUTAS */}
            {/* + AÑADIR 404 */}

            {/* PROTEGIDAS */}
            <Route path="/usuario" element={<PrivateRoute />}>
                <Route path="" element={<UserPage />} />
            </Route>

        </Routes>

    )

}

export default AppRoutes