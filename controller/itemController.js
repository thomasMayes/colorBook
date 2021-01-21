var passport = require("passport");
require("../config/passport")(passport);
const Item = require("../models/items.js");

module.exports = {
  getItems: (req, res) => {
    Item.find().then((result) => {
      res.send({ items: result });
    });
  },
  addItems: async (req, res) => {
    let { filename } = req.file;
    let { name, description, price, userId, color , aspect} = req.body;

    let newItem = new Item({
      name,
      description,
      price,
      userId,
      color,
      aspect,
      image: `./img/uploads/${filename}`,
    });

    newItem.save((err) => {
      if (err) {
        console.log(err);
        return res.json({ success: false, msg: "error adding item" });
      }
    });

    let itemList = await Item.find();
    res.send(itemList);
  },
};
