import express from "express";
import db from "../../db/models/index.js";
import s from "sequelize";
const { Op } = s;
const router = express.Router();

const { Product, Review } = db;

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const data = await Product.findAll({ //method from sequelize documentation

        //attributes : ["name", "price"] ,  // when we dont want to display only somecolumns
        //attributes:{ exclude :["id"]}, //albo exclude z attribiutes. this time is an OBJECt
        
        include: Review,   
        
        
        
        
        //postman ---> /products?name= ....

        ///if user provides a query THEN SEARCH IT. 
        where: req.query.search    //IMPLEMENT A FILTERS FROM MODERN-QUERY-BASIC DOCUMENTATION
          ? {
              [Op.or]: [
                 { name: { [Op.iLike]: `%${req.query.search}%` } }, //iLike looking for string and it is letter sensitive
                { brand: { [Op.iLike]: `%${req.query.search}%` } },                
              ],
            }
          : {},
      });
      res.send(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })

  
  .post(async (req, res, next) => {
    try {
      const data = await Product.create(req.body);
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
      const data = await Product.findByPk(req.params.id);   /// search products using a PK
      res.send(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .put(async (req, res, next) => {
    try {
      const data = await Product.update(req.body, {
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
      const rows = await Product.destroy({ where: { id: req.params.id } });
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
