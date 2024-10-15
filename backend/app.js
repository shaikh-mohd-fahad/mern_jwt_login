import express from "express"
import web_route from "./route/web.js";
import cors from "cors"
import bodyParser from "body-parser";
const app=express();
app.use(cors())
app.use(express.json())
app.use("/",web_route)
app.listen(3000);