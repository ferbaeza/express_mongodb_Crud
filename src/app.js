import path from "path";
import express from "express";
import morgan from "morgan";
import exphbs from "express-handlebars";

import indexRoutes from "./routes/index.routes";

const app = express();

// settings
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  exphbs({
    layoutsDir: path.join(app.get("views"), "layouts"),
    defaulLayout: "main",
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");

app.use(indexRoutes);

export default app;
