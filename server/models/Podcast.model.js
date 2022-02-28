const { Schema, model } = require("mongoose");

const podcastSchema = new Schema(
    {
        name: {
            type: String,
            unique: true,
            required: true,
        },


    },
//rellenar según API, pte visto bueno de Guille
    {
        timestamps: true
    }

);


const Podcast = model("Podcast", podcastSchema);

module.exports = Podcast;