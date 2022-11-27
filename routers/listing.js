const { Router } = require("express");
const Listing = require("../models/").listing;
const Category = require("../models/").category;
const User = require("../models").user;
const Request = require("../models").request;
const Order = require("../models").order;
const authMiddleware = require("../auth/middleware");

const router = new Router();

router.get("/", async (req, res, next) => {
  const listings = await Listing.findAll({
    include: [Category, User],
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

router.post("/:listingId/request", authMiddleware, async (req, res, next) => {
  try {
    // console.log("did it coe here");
    const listingId = parseInt(req.params.listingId);
    const listing = await Listing.findByPk(listingId);

    if (!listing) {
      return res.status(404).send({ message: "this listing does not exist" });
    }
    const { start_date, end_date } = req.body;

    if (!start_date || !end_date) {
      return res.status(400).send({ message: "please provie necessary info" });
    }

    // console.log("my user id from auth", listing.image);

    const newRequest = await Request.create({
      title: listing.title,
      description: listing.description,
      image: listing.image,
      start_date: start_date,
      end_date: end_date,
      userId: req.user.id,
      categoryId: listing.categoryId,
      active: true,
    });

    const newOrder = await Order.create({
      requestId: newRequest.id,
      listingId: listingId,
      status: "created",
    });

    // console.log("new order", newOrder);

    // console.log("this new order has come here", newOrder);
    res.status(201).json({ request: newRequest, order: newOrder });
  } catch (error) {}
});

module.exports = router;
