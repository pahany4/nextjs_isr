import { Router } from "express";
import cors from "cors";
import { create_project, projects, project, project_results, add_results } from "../controllers/project.js";

import * as os from "os";
import formData from "express-form-data";

const options = {
  uploadDir: os.tmpdir(),
  autoClean: true,
};

const Project = Router();
Project.use(formData.parse(options));
Project.post("/profiles/:profile_id/project/", cors(), create_project);
Project.post("/profiles/:profile_id/project/:project/add_product/", cors(), (req, res) => {
  res.status(200).json({});
});
Project.get("/profiles/:profile_id/project/", cors(), projects);
Project.get("/project/list/", cors(), projects);
Project.get("/profiles/:profile_id/project/:id/", cors(), project);
Project.get("/profiles/:profile_id/project/:id/results/", cors(), project_results);
Project.post("/profiles/:profile_id/project/:id/results/", cors(), add_results);
Project.get("/project/:id/", cors(), project);
Project.patch("/profiles/:profile_id/project/:id/", cors(), project);
Project.patch("/project/:id/", cors(), project);
Project.delete("/project/products/:id/", cors(), (req, res) => {
  res.status(200).json({});
});

export default Project;
