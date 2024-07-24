import mongoose from "mongoose";

const { Schema } = mongoose;

const TodoSchema = new Schema({
  title: {
    type: String,
    require: [true, "its required"],
  },
  task: [String],
});

const Todo = mongoose.model("Todo", TodoSchema);

export default Todo;
