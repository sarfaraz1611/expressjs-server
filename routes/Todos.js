import express from "express";
import {
  createTodo,
  viewTodo,
  viewById,
  deleteById,
  updateTodo,
  updateTodoTask,
} from "../controller/controller.js";

const router = express.Router();

router.post("/create", createTodo);

router.get("/All", viewTodo);

router.get("/:id", viewById);

router.delete("/:id", deleteById);

router.put("/:id", updateTodo);

router.put("/:id", updateTodoTask);

export default router;
