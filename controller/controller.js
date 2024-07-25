import Todo from "../model/Task.js";

const createTodo = async (req, res) => {
  try {
    const inserted = await Todo.create(req.body);

    res.status(201).send(inserted);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const viewTodo = async (req, res) => {
  try {
    const Result = await Todo.find({});
    res.status(200).send(Result);
  } catch (error) {
    res.status(500).send(error);
  }
};

const viewById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Todo.findById(id);
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};
const deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Todo.deleteOne({ _id: id });

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};
const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Todo.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          title: req.body.title,
        },
      }
    );

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateTodoTask = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Todo.findOneAndUpdate(
      {
        _id: id,
        "task.id": req._id,
      },
      {
        $set: {
          "task.$.description": req.description,
          "task.$.completed": req.completed,
        },
      },
      { new: true }
    );

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

export {
  createTodo,
  viewTodo,
  viewById,
  deleteById,
  updateTodo,
  updateTodoTask,
};
