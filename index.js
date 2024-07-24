import express from "express";
import connectToDatabase from "./db/index.js";
import Todo from "./model/Task.js";
const app = express();

connectToDatabase();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Choo Choo! Welcome to your Express app 🚅");
});

app.post("/Todo/create", async (req, res) => {
  try {
    const inserted = await Todo.create(req.body);

    res.status(201).send(inserted);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

app.get("/Todo/All", async (req, res) => {
  try {
    const Result = await Todo.find({});
    res.status(200).send(Result);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/Todo/:id", async(req, res) => {
  try {
    const { id } = req.params;
    const result = await Todo.findById(id);
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});


app.delete

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
