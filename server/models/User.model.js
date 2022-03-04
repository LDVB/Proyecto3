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

    level: {
      enum: ['AMATEUR', 'PROFESSIONAL'],
      type: String

    },

    image: {
      type: String,
    },

    age: {
      type: String,
      required: true,
      default: "campo edad obligatorio"
    },

    linkedin: {
      required: true,
      type: String,
      default: "adjunta tu linkedin"
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


const User = model("User", userSchema);

User.syncIndexes();

module.exports = User
