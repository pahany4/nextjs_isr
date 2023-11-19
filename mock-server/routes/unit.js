import { Router } from "express";
import cors from "cors";
import { unit } from "../controllers/unit.js";

const Unit = Router();

Unit.get("/v1/subanalysis/unit/", cors(), unit);

export default Unit;
