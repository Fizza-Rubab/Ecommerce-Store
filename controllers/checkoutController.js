const { Payment, Address, Order } = require("../models");

exports.checkingOut = async (req, res, next) => {
  const { streetAddress, zip, city, country, cvv, card, exp, shipmentType } =
    req.body;

  const address = new Address({ streetAddress, zip, city, country });

  await address.save();

  let order = await Order.findOne({
    where: { buyer_id: req.user, ordered: false },
  });

  order.ordered = true;
  order.address_id = address.id;
  order.shipmentType = shipmentType;

  if (shipmentType == "P") {
    const payment = new Payment({ cvv, card, exp });
    await payment.save();
    order.payment_id = payment.id;
  }
  let date = new Date();
  let ndate = new Date();

  order.timeStarted = date;
  ndate.setDate(date.getDate() + 3);
  order.timeFinished = ndate;
  await order.save();
  res.json(order);
};
