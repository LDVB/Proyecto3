const { Schema, model } = require("mongoose");


const eventSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },

    name: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },

    date: {
      type: Date,
      default: Date.now
    },

    location: {
      type: {
        type: String,
        // default: 'Point',
      },
      // coordinates: [Number],
    },

    image: {
      type: String,
    },

    description: {
      type: String,
      maxlength: 500,
      trim: true,
    },

    assistants: [{
      type: Schema.Types.ObjectId,
      ref: 'User',
    }],

  },

  {
    timestamps: true,
  }

);

const Event = model("Event", eventSchema);

module.exports = Event;
