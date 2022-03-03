const cloudinary = require("cloudinary").v2
const { CloudinaryStorage } = require('multer-storage-cloudinary')
const multer = require('multer')

cloudinary.config({

    Cloud_Name: process.env.CLOUDINARY_NAME,
    api_Key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
})

const storage = new CloudinaryStorage({ cloudinary })

const uploadCloud = multer({ storage })

module.export = uploadCloud