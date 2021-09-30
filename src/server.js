import express from "express";
import cors from "cors";
import sequelize  from "./db/index.js";
import {connectDB} from "./db/index.js";
import  Product  from "./db/models/products.js";
import Review from "./db/models/reviews.js";
import db from "./db/models/index.js";


import productsRouter from "./crud/products/index.js";
import reviewsRouter from "./crud/reviews/index.js";
//import categoryRouter from "./crud/reviews/index.js";

const server = express();

const { PORT = 4444 } = process.env;

server.use(cors());

server.use(express.json());

server.use("/products", productsRouter)
server.use("/reviews", reviewsRouter)

server.listen(PORT, async () => {
    await connectDB();
    console.log(`Server is listening on port ${PORT}`);
  });
  
  server.on("error", (error) => {
    console.log("Server is stopped ", error);
  });