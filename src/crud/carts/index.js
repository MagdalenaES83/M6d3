import express from "express";
import db from "../../db/models/index.js";
import sequelize from "sequelize";

const { Cart, Product } = db;
const router = express.Router();




router.route("/:userId").get(async (req, res, next) => {
  try {
    const data = await Cart.findAll({
      where: { userId: req.params.userId },
      include: Product,
      attributes: [
        "productId",
        [sequelize.fn("count", sequelize.col("cart.id")), "unitary_qty"],
      ],
      group: ["productId", "product.id"],
    });

    res.send(data);
  } catch (error) {
    console.log(error);
    next(error);
  }
});


router.delete(async (req, res, next) => {
  try {
    const { userId, productId } = req.params;
    const rows = await Cart.destroy({
      where: { userId, productId },
    });
    if (rows > 0) {
      res.send(` Product has been deleted`);
    } else {
      res.status(404).send("Not found");
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

export default router;