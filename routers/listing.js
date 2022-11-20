const { Router } = require("express");
const Listing = require("../models/").listing;
const Category = require("../models/").category;
const User = require("../models").user;

const router = new Router();

router.get("/", async (req, res, next) => {
  const listings = await Listing.findAll({
		include: [Category, User]
	});

  res.send(listings);
});


module.exports = router;
