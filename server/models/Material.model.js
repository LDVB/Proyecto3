const { Schema, model } = require("mongoose");

const materialSchema = new Schema(
    {
        name: {
            type: String,
            unique: true,
            required: true,
        },

        type: {
            enum: ['Book', 'Coworking']
        },

        details: {
            type: String,

        },

        image: {
            type: String,
        },

        description: {
            type: String,
        },

    },

    {
        timestamps: true
    }

);


const Material = model("Material", materialSchema);

module.exports = Material;
