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
  const listings = await Listing.findAll({
    include: [Category, User],
    order: [["createdAt", "DESC"]],
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

// end point to add requset to listings.
router.post("/:listingId/request", authMiddleware, async (req, res, next) => {
  try {
    // console.log("did it coe here");
    const listingId = parseInt(req.params.listingId);
    const listing = await Listing.findByPk(listingId);

    if (!listing) {
      return res.status(404).send({ message: "this listing does not exist" });
    }
    const { title, description, start_date, end_date } = req.body;
    console.log("request", req.body);

    if (!start_date || !end_date) {
      return res.status(400).send({ message: "please provie necessary info" });
    }

    // console.log("my user id from auth", listing.image);

    const newRequest = await Request.create({
      title: title,
      description: description,
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

    const updatedListing = await Listing.findByPk(listing.id,
      {
        include: [
        {
          model: Request,
          include: [{ model: User }],
        },
      ],
      order: [["updatedAt", "DESC"]],
    })

    // console.log("new order", newOrder);

    // console.log("this new order has come here", newOrder);

    const ws = req.app.get("ws");
    console.log('about to send socket', updatedListing)
    ws.emit("request_send", updatedListing, newRequest, newOrder);

    res.status(201).json({ request: newRequest, order: newOrder });
  } catch (error) {}
});

router.post("/", authMiddleware, async (req, res, next) => {
  try {
    const { title, description, image, categoryId } = req.body;
    console.log("reques", req.body, req.body.image);
    if (!title || !description) {
      return res.status(400).send("Must provide title and description");
    }

    const newListing = await Listing.create({
      title,
      description,
      image,
      categoryId,
      available: true,
      userId: req.user.id,
    });
    res.json(newListing);
  } catch (e) {
    console.log(e.message);
  }
});

router.patch(
  "/:listingId/requests/:requestId",
  authMiddleware,
  async (req, res, next) => {
    try {
      const listingId = parseInt(req.params.listingId);
      const requestId = parseInt(req.params.requestId);
      const { status } = req.body;
      console.log("get status from request", status);

      const listingRelevant = await Listing.findByPk(listingId);
      const requestRelevant = await Request.findByPk(requestId);

      if (listingRelevant.userId !== req.user.id) {
        res
          .status(403)
          .send({ message: `you are not authorized to edit this space` });
      }

      const updateOrder = await Order.findOne({
        where: {
          listingId,
          requestId,
        },
      });

      // console.log("test update order", updateOrder);

      const updatedOrder = await updateOrder.update({ status: status });
      // console.log("updeated Order", updatedOrder);

      const ws = req.app.get("ws");
      ws.emit("order_updated", updateOrder, listingRelevant, requestRelevant);
      res.send(updatedOrder);
    } catch (e) {
      console.log(e.message);
      next(e);
    }
  }
);

module.exports = router;

// router.patch("/:id", authMiddleware, async (req, res, next) => {
//   const id = parseInt(req.params.id);
//   const { title, description, backgroundColor, color } = req.body;
//   const spaceToBeUpdated = await Space.findByPk(id, { where: { id: id } });

//   if (!Space.userId === req.user.id) {
//     res
//       .status(403)
//       .send({ message: `you are not authorized to edit this space` });
//   }
//   if (!spaceToBeUpdated) {
//     res.status(404).send({ message: `Space with this id ${id}not found` });
//   } else {
//     const updatedSpace = await spaceToBeUpdated.update({
//       title,
//       description,
//       backgroundColor,
//       color,
//     });
//     await res.send(updatedSpace);
//   }
// });
