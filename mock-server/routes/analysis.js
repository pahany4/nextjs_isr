import { Router } from "express";
import cors from "cors";
import { analysis_list, analysisInfo, analysisUpdate } from "../controllers/analysis.js";

const analysis = Router();

analysis.get("/analysis/", cors(), analysis_list);
analysis.get("/analysis/:id/", cors(), analysisInfo);
analysis.patch("/analysis/:id/", cors(), analysisUpdate);

export default analysis;
