import express from "express"
const web_route=express.Router();
import { home, Login } from "../controller/siteController.js";

web_route.get("/",home)
// web_route.get("/login",Login)
web_route.post("/login",Login)

export default web_route