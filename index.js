//packages

const express = require("express");
const corsMiddleWare = require("cors");
const { Server } = require("socket.io");

//routers
const listingRouter = require("./routers/listing");
const authRouter = require("./routers/auth");
const reqRouter = require("./routers/request");
const categoriesRouter = require("./routers/categories");

//constants
const port = 4000;

//create an express app
const app = express();
app.use(corsMiddleWare());

//// express.json() to be able to read request bodies of JSON requests a.k.a. body-parser
app.use(express.json());

//routes

app.use("/listings", listingRouter);
app.use("/categories", categoriesRouter);
app.use("/auth", authRouter);
app.use("/requests", reqRouter);

const httpServer = app.listen(port, () => {
  console.log("Express Server listening on port 4000");
});

const socket = new Server(httpServer);
socket.on("connection", () => {
  console.log("got new connection");
});

app.set("ws", socket);
