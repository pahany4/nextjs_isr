import { Router } from "express";
import cors from "cors";
import { profiles } from "../controllers/profiles.js";

const Profiles = Router();
Profiles.get("/profiles/", cors(), profiles);

//router.patch('/notification/1/', cors(), create)

export default Profiles;
