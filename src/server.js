import express from "express";
import cors from "cors";
import {connectDB} from "./db/index.js";


import usersRouter from "./crud/users/index.js"
import productsRouter from "./crud/products/index.js";
import reviewsRouter from "./crud/reviews/index.js";
import cartRouter from "./crud/carts/index.js"


const server = express();
const port = process.env.PORT


server.use(cors());
server.use(express.json());


server.use("/products", productsRouter)
server.use("/reviews", reviewsRouter)
server.use("/users", usersRouter)
server.use("/cart" , cartRouter)



server.listen(port, async () => {
    await connectDB();
    console.log(`Server is running on port ${port}`);
  });
  
  server.on("error", (error) => {
    console.log("Server is stopped ", error);
  });