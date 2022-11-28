const { Router } = require("express");
const Listing = require("../models/").listing;
const Request = require("../models").request;
const Category = require("../models/").category;
const User = require("../models").user;

const router = new Router();

router.get("/", async (req, res, next) => {
  const categories = await Category.findAll({});

  res.send(categories);
});

router.get("/:id", async (req, res, next) => {
  const id = parseInt(req.params.id);
  if (isNaN(parseInt(id))) {
    return res.status(400).send({ message: "this id is not a number" });
  }

  const category = await Category.findByPk(id, { include: [Listing, Request] });

  if (!category) {
    res.status(404).send("category is not found");
  } else {
    res.send(category);
  }
});

module.exports = router;
