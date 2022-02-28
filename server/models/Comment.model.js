const { Schema, model } = require("mongoose");


const commentSchema = new Schema(
{
  event: {
    type: Schema.Types.ObjectId,
    ref: 'Event',
  },

  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },

  date: {
    type: Date,
    default: Date.now
  },

  text: {
    type: String,
    maxlength: 500,
    minlength: 1,
    trim: true,
  },

},

{
  timestamps: true,
}

);

const Comment = model("Comment", commentSchema);

module.exports = Comment;
