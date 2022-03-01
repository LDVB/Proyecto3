const { Schema, model } = require("mongoose");


const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      unique: true,
      required: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'por favor, introduce una dirección de email válida'],
    },

    password: {
      type: String,
      required: true
    },

    avatar: {
      type: String,
    },

    age: {
      type: Number,
      // required: true,
    },

    level: {
      type: String,
      // required: true,
      enum: ['Profesional', 'Amateur']
    },

    linkedin: {
      // required: true,
      type: String,
    },

    description: {
      type: String,
      maxlength: 500,
      trim: true,
    },

    friends: [{
      type: Schema.Types.ObjectId,
      ref: 'User',
    }],

  },

  {
    timestamps: true,
  }

);


module.exports = model("User", userSchema);
