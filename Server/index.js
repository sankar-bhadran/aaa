import express from "express";
import routes from "./routes/routerIndex.js";

const app = express();
app.use(express.json());
app.use(routes);
app.get("/", (req, res) => {
  return res.send("Hai Everyone");
});

app.listen(3000, () => {
  console.log("connected to server 3000");
});
