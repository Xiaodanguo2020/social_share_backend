const User = require("./models").user;
const Request = require("./models").request;
const Order = require("./models").order;
const Listing = require("./models").listing;
const Category = require("./models").category;

const getAllOrder = async () => {
  const theOrders = await Order.findAll({ include: Request });
  // console.log("order", theOrders);
};

// getAllOrder();

const getOneOrder = async () => {
  const id = 1;
  const theOneOrder = await Order.findByPk(id, { include: Listing });
  // console.log("order", theOneOrder);
};
// getOneOrder();

const getUserOrder = async () => {
  const id = 1;
  const theUserOrder = await User.findByPk(id, {
    include: [{ model: Request }, { model: Listing }],
  });
  // console.log("order", theUserOrder);
};
// getUserOrder();

const getManyOrders = async () => {
  const theOrders = await Request.findAll({ include: Listing });
  // console.log("order", theOrders);
};

// getManyOrders();

const getListingsUsers = async () => {
  const allListing = await Listing.findAll({
    include: [{ model: User }, { model: Category }],
    raw: true,
  });
  // console.log("order", allListing);
};

// getListingsUsers();

const getListWithCategory = async () => {
  const allListingswithCat = await Listing.findAll({
    include: Category,
  });
  // console.log("llisting with category", allListingswithCat);
};

// getListWithCategory();

const userListings = async () => {
  const listingOrderUser = await Listing.findAll({
    include: [
      {
        model: Request,
        include: [{ model: User }],
      },
    ],
    where: { userId: 3 },
    raw: true,
  });

  console.log("user request", listingOrderUser);
};

userListings();

const userRequests = async () => {
  const requestOrderUser = await Request.findAll({
    include: [
      {
        model: Listing,
        include: [{ model: User }],
      },
    ],
    where: { userId: 3 },
    raw: true,
  });

  console.log("user request", requestOrderUser);
};

// userRequests();
