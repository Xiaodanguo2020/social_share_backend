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

router.get("/:id", async (req, res, next) => {
  const id = parseInt(req.params.id);
  if (isNaN(parseInt(id))) {
    return res.status(400).send({ message: "this id is not a number" });
  }

  const listing = await Listing.findByPk(id, { include: [User, Category] });

  if (!listing) {
    res.status(404).send("listing is not found");
  } else {
    res.send(listing);
  }
});

module.exports = router;
