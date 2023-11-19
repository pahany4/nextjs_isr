import noticeRoutes from "./routes/notice.js";
import users from "./routes/users.js";
import cors from "cors";
import express from "express";
import orders from "./routes/orders.js";
import product from "./routes/products.js";
import category from "./routes/category.js";
import project from "./routes/project.js";
import unit from "./routes/unit.js";
import results from "./routes/results.js";
import Chat from "./routes/chat.js";
import journal from "./routes/journal.js";
import tasks from "./routes/tasks.js";
import analysis from "./routes/analysis.js";
import profiles from "./routes/profiles.js";

const PORT = process.env.PORT ?? 8000;
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(noticeRoutes);
app.use(users);
app.use(orders);
app.use(product);
app.use(category);
app.use(project);
app.use(unit);
app.use(results);
app.use(Chat);
app.use(journal);
app.use(tasks);
app.use(analysis);
app.use(profiles);

app.listen(PORT, () => {
  //console.log(`Server has been started on port ${PORT}...`);
  return null;
});
