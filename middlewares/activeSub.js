const stripeSecret = process.env.STRIPE_SECRET_KEY;
const stripe = require("stripe")(stripeSecret);
const errorConfig = require("../utils/error.config");

module.exports = async (req, res, next) => {
  try {
    const { pId } = req;
    const subscriptions = await stripe.subscriptions.list({
      customer: pId,
    });
    console.log("sub", subscriptions);
    if (!subscriptions.data.length) {
      return res.status(404).json(errorConfig.noSubscription);
    }
    next();
  } catch (e) {
    return res
      .status(400)
      .json({ message: "User don't have active subscriptions" });
  }
};
