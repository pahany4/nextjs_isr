import { Router } from "express";
import cors from "cors";
import {
  productInfo,
  products,
  add_product,
  update_product,
  delete_product,
  add_act,
  add_doc,
} from "../controllers/products.js";

const product = Router();

/** Список образцов (админ) */
product.get("/products/", cors(), products);

/** Список образцов (профиль) */
product.get("/profiles/:id/products/", cors(), products);

/** Полная инф образца (профиль) */
product.get("/profiles/:profile_id/products/:id/", cors(), productInfo);

/** Полная инф образца (админ) */
product.get("/products/:id/", cors(), productInfo);

/** Создание образца */
product.post("/profiles/:profile_id/products/", cors(), add_product);

/** Загрузка акта отбора пробы */
product.post("/profiles/:profile_id/products/:product_id/act/", cors(), add_act);

/** Загрузка документа образца */
product.post("/profiles/:profile_id/products/documents/", cors(), add_doc);

/** Обновление инф об образце */
product.patch("/products/:id/", cors(), update_product);
product.patch("/profile/:profile_id/products/:id/", cors(), update_product);

/** Удаление образца */
product.delete("/products/:id/", cors(), delete_product);

/** Удаление документа образца */
product.delete("/profiles/:profile_id/products/documents/:id/", cors(), delete_product);

export default product;
