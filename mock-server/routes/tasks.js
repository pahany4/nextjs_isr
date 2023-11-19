import { Router } from "express";
import cors from "cors";
import { tasks } from "../controllers/tasks.js";

const Tasks = Router();

Tasks.get("/v1/task/", cors(), tasks);

export default Tasks;
