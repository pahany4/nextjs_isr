import { Router } from "express";
import cors from "cors";
import { results } from "../controllers/results.js";

const Results = Router();

Results.get("/analysis/result-analysis/:id/", cors(), results);
Results.post("/analysis/result-analysis/:id/", cors(), results);
Results.patch("/analysis/result-analysis/:id/", cors(), results);
Results.patch("/subanalysis/result/:id/", cors(), (req, res) => {
  res.status(200).json({});
});

export default Results;
