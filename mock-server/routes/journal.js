import { Router } from "express";
import cors from "cors";
import { journal } from "../controllers/journal.js";

const Journal = Router();

Journal.get("/v1/journal/", cors(), journal);

export default Journal;
