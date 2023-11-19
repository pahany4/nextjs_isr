import { Router } from "express";
import cors from "cors";
import { orders, order, create_order, add_protocol } from "../controllers/orders.js";
import * as os from "os";
import formData from "express-form-data";

const options = {
  uploadDir: os.tmpdir(),
  autoClean: true,
};

const Orders = Router();
Orders.use(formData.parse(options));
Orders.get("/v1/profiles/:profile_id/orders/", cors(), orders);
Orders.get("/v1/orders/list/", cors(), orders);
Orders.get("/v1/profiles/:profile_id/orders/:id/", cors(), order);
Orders.get("/v1/orders/:id/", cors(), order);
Orders.patch("/v1/orders/:id/", cors(), order);
Orders.patch("/v1/profiles/:profile_id/orders/:id/", cors(), order);
Orders.post("/profiles/:profile_id/orders/", cors(), create_order);
Orders.patch("/v1/orders/:id/test_report_ecp/", cors(), add_protocol);

//router.patch('/notification/1/', cors(), create)

export default Orders;
