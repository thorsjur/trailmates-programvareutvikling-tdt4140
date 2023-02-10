import { Request, Response } from "express";
import express = require("express");
//import handleSubmit from './handles/handlesubmit';

//handleSubmit("Tester kobling")
//Tester kobling til Firebase. Skal komme opp under FireStore Database

const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Hello World!",
    success: true,
  });
});

app.listen(3001, () => {
  console.log("Listening on port 3001.");
});
