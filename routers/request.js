const { Router, response } = require("express");
const Listing = require("../models/").listing;
const Category = require("../models/").category;
const User = require("../models").user;
const Request = require("../models").request;
const Order = require("../models").order;
const authMiddleware = require("../auth/middleware");
const listing = require("../models/listing");

const router = new Router();

router.get("/", async (req, res, next) => {
  const requests = await Request.findAll({
    include: [Category, User],
  });

  res.send(requests);
});

module.exports = router;
