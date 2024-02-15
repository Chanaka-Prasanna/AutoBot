import express from "express";
import cors from "cors";
import router from "./route.js";
import bodyParser from "body-parser";

const server = express();
server.use(cors({}));
server.use(bodyParser.json());
server.use("/conversation", router);

server.listen(5000, () => {
  console.log("Server has start listning to port 5000");
});
