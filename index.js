const express = require("express")

const app = express()

const port = 4000

const listingRouter = require("./routers/listing")

app.use("/listing",listingRouter)


app.listen(port, () => {
	console.log("Express Server listening on port 4000")
})
