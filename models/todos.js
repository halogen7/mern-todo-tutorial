const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  action: {
    type: String,
    required: [true, "The todo text field is required"],
  },
  completed: {
    type: Boolean,
    required: [true, "The todo completed field is required"]
  }
});

const Todo = mongoose.model("todo", TodoSchema);

module.exports = Todo;
