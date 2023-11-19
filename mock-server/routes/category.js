import { Router } from "express";
import cors from "cors";
import { Category } from "../controllers/category.js";

const category = Router();

category.get("/v1/product/category/", cors(), Category);

export default category;
