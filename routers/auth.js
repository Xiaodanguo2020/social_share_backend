const bcrypt = require("bcrypt");
const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const { SALT_ROUNDS } = require("../config/constants");
const Order = require("../models/").order;
const Request = require("../models/").request;
const Listing = require("../models/").listing;

const router = new Router();

//login
router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Please provide both email and password" });
    }

    const user = await User.findOne({ where: { email } });

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(400).send({
        message: "User with that email not found or password incorrect",
      });
    }

    delete user.dataValues["password"]; // don't send back the password hash
    const token = toJWT({ userId: user.id });
    return res.status(200).send({ token, user: user.dataValues });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

//signup
router.post("/signup", async (req, res) => {
  const { email, password, name } = req.body;
  if (!email || !password || !name) {
    return res.status(400).send("Please provide an email, password and a name");
  }

  try {
    const newUser = await User.create({
      email,
      password: bcrypt.hashSync(password, SALT_ROUNDS),
      name,
    });

    delete newUser.dataValues["password"]; // don't send back the password hash

    const token = toJWT({ userId: newUser.id });

    res.status(201).json({ token, user: newUser.dataValues });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(400)
        .send({ message: "There is an existing account with this email" });
    }

    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

// The /me endpoint can be used to:
// - get the users email & name using only their token
// - checking if a token is (still) valid
router.get("/me", authMiddleware, async (req, res) => {
  console.log("request on Me endpoint");

  const userRequestData = await Request.findAll({
    include: [
      {
        model: Listing,
        include: [{ model: User }],
      },
    ],
    where: { userId: req.user.id },
    order: [["updatedAt", "DESC"]],
  });

  const userListingsData = await Listing.findAll({
    include: [
      {
        model: Request,
        include: [{ model: User }],
      },
    ],
    where: { userId: req.user.id },
    order: [["updatedAt", "DESC"]],
  });

  console.log("user token");

  // console.log(
  //   "user Listing data",
  //   userListingsData.map((list) => list.requests)
  // );

  delete req.user.dataValues["password"];
  res.status(200).send({
    user: req.user.dataValues,
    myRequests: userRequestData,
    myListings: userListingsData,
  });
});

module.exports = router;

/* const userRequests = async () => {
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

userRequests();*/
