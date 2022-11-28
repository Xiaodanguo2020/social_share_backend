//packages

const express = require("express");
const corsMiddleWare = require("cors");

//routers
const listingRouter = require("./routers/listing");
const authRouter = require("./routers/auth");
const requestRouter = require("./routers/request");
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
// app.use("/request", requestRouter);

app.listen(port, () => {
  console.log("Express Server listening on port 4000");
});
