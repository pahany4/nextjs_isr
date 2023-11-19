import { Router } from "express";
import cors from "cors";
import { order_chat, send_new_message, project_chat, send_new_message_chat_project } from "../controllers/chat.js";

const Chat = Router();

Chat.get("/v1/profiles/:profile_id/orders/:order_id/chat/", cors(), order_chat);
Chat.post("/v1/profiles/:profile_id/orders/:order_id/chat/", cors(), send_new_message);
Chat.get("/v1/profiles/:profile_id/project/:project_id/chat/", cors(), project_chat);
Chat.post("/v1/profiles/:profile_id/project/:project_id/chat/", cors(), send_new_message_chat_project);

export default Chat;
