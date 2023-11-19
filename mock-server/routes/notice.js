import { Router } from "express";
import { getAll, notice } from "../controllers/notice.js";
import cors from "cors";

const noticeRouters = Router();

noticeRouters.get("/profiles/:profile_id/events/", cors(), getAll);
noticeRouters.get("/helpers/profiles/:profile_id/notifications/", cors(), notice);

//router.patch('/notification/1/', cors(), create)

export default noticeRouters;
