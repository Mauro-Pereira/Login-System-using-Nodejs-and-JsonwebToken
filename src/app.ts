import express from "express";
import { router } from "./Route";
const app = express();


app.use(express.json());

app.use(router)

export {app};