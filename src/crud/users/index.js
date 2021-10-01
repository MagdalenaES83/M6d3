import express from "express";
import db from "../../db/models/index.js";
import s from "sequelize";
const { Op } = s;
const router = express.Router();

const { User, Cart } = db;

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const data = await User.findAll({ //method from sequelize documentation
      
        include: Cart,   
      
        
      });
      res.send(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })

  
  .post(async (req, res, next) => {
    try {
      const data = await User.create(req.body);

      res.send(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

router
  .route("/:id")
  .get(async (req, res, next) => {
    try {
      const data = await User.findByPk(req.params.id);   /// search products using a PK
      res.send(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .put(async (req, res, next) => {
    try {
      const data = await User.update(req.body, {
        where: {
          id: req.params.id,
        },
        returning: true,
      });
      res.send(data[1][0]); // because we are updating only one record - id condition
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .delete(async (req, res, next) => {
    try {
      const rows = await User.destroy({ where: { id: req.params.id } });
      if (rows > 0) {
        res.send("ok");
      } else {
        res.status(404).send("Not found");
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

export default router;
