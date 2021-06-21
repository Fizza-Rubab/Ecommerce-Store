const { Payment, Address, Order } = require("../models");

exports.checkingOut = async (req, res, next) => {
  const { streetAddress, zip, city, country, cvv, card, exp } = req.body;

  const address = new Address(streetAddress, zip, city, country);

  address.save();

  let order = await Order.findOne({
    where: { user_id: req.user_id, ordered: false },
  });

  order.ordered = true;
  order.address_id = address.id;

  if (shipmentType == "P") {
    const payment = new Payment(cvv, card, exp);
    payment.save();
    order.payment_id = payment.id;
  }
  order.timeStarted = new Date();
  order.timeFinished.setDate(timeStarted.getDate() + 3);
  order.save();
  res.json(order);
};
