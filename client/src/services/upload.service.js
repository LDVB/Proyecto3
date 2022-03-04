import axios from 'axios'

class UploadService {

    constructor() {

        this.api = axios.create({ baseURL: `http://localhost:5005/api/upload` })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    uploadImage(image) {
        return this.api.post('/image', image)
    }
}

const uploadService = new UploadService()

export default uploadService