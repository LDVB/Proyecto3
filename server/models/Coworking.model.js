const { Schema, model } = require("mongoose");

const coworkingSchema = new Schema(
    {
        name: {
            type: String,
            unique: true,
            required: true,
        },

        image: {
            type: String,

            default: "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG"
        },

        location: {
            type: {
                type: String,
                default: 'Point',
            },
            coordinates: [Number],
        },

        website: {
            type: String,
        },
        
    },

    {
        timestamps: true
    }

);


const Coworking = model("Coworking", coworkingSchema);

module.exports = Coworking;