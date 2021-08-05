import path from "path";
import express from "express";
import { route } from "./router";

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(route);

const PORT = process.env["PORT"] as string || 3000;
app.listen(PORT, () => {
    console.log("Server running at port %d", PORT);
});