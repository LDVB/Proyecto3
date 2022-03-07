import axios from 'axios'

class UserService {
    constructor() {
        this.axios = axios.create({ baseURL: 'http://localhost:5005/api/user' })

        this.axios.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }
            return config
        })
    }

    getOneUserById(id) {
        return this.axios.get(`/getUserById/${id}`)
    }

    // getAllUsers() {
    //     return this.axios.get('/getAllUsers')
    // }

}

const userService = new UserService()

export default userService