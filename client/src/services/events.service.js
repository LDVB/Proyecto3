import axios from 'axios'

class EventsService {

    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/usuario/eventos` })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    createEvent = (event, token) => {
        return this.api.post(`/crear-evento`, event, { headers: { Authorization: `Bearer ${token}` } })
    }

    getAllEvents = () => {
        return this.api.get('/listado')
    }

    getOneEvent = id => {
        return this.api.get(`/detalles/${id}`)
    }

    editOneEvent = (id, asdsda) => {
        return this.api.put(`/modificar-evento/${id}`, asdsda)
    }

    deleteOneEvent = id => {
        return this.api.delete(`/borrar-evento/${id}`)
    }

}

const eventsService = new EventsService()
export default eventsService