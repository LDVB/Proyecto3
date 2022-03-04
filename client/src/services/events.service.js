import axios from 'axios'

class EventsService {

    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/usuario/eventos` })
    }

    createEvent = (event, token) => {
        return this.api.post(`/crear-evento`, event, { headers: { Authorization: `Bearer ${token}` } })
    }

    getAllEvents = () => {
        return this.api.get('/listado')
    }

    getOneEvent = id => {
        return this.api.get(`/evento/${id}`)
    }

    editOneEvent = id => {
        return this.api.put(`/modificar-evento/${id}`)
    }

    deleteOneEvent = id => {
        return this.api.delete(`/borrar-evento/${id}`)
    }

}

const eventsService = new EventsService()

export default eventsService