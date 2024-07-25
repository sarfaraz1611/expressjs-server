import mongoose from "mongoose";

const { Schema } = mongoose;

const TaskSchema = new Schema({
  description: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
});

const TodoSchema = new Schema({
  title: {
    type: String,
    require: [true, "its required"],
  },
  task: [TaskSchema],
});

const Todo = mongoose.model("Todo", TodoSchema);

export default Todo;
