import { Router } from "express";
import { login, verify, getMe, getProfiles, refresh } from "../controllers/users.js";
import cors from "cors";

const users = Router();

users.post("/v1/users/login/", cors(), login);
users.post("/v1/users/jwt/verify/", cors(), verify);
users.get("/v1/users/me/", cors(), getMe);
users.get("/v1/profiles/", cors(), getProfiles);
users.post("/v1/users/jwt/refresh/", cors(), refresh);

//router.patch('/notification/1/', cors(), create)

export default users;
