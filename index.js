import express from "express";
import connectToDatabase from "./db/index.js"
import router from "./routes/Todos.js"

const app = express();

connectToDatabase();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use("/Todo",router)



const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
