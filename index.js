const express = require("express")

const app = express()

const port = 4000

const corsMiddleWare = require("cors");

const listingRouter = require("./routers/listing")
const categoriesRouter = require("./routers/categories")

app.use(corsMiddleWare())

app.use("/listings",listingRouter)
app.use("/categories",categoriesRouter)


app.listen(port, () => {
	console.log("Express Server listening on port 4000")
})
