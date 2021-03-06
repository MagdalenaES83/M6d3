import  sequelize  from "../index.js";
import s from "sequelize";  //WE IMPORT DATA FORMAT 
//import Review from "./review.js"


const { DataTypes } = s; // WE DECONSTRUCT DATA FORMAT TO USE IT IN THE TAB

//WE CREATE A PRODUCT TABLE 
const Product = sequelize.define(
  "product",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,         // AUTOMATIC CREATE AN ID
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,                     //IS REQUIRED
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: false,                     //IS REQUIRED
      },
    
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      isFloat: true,                //validation 
    },
    image: {
      type: DataTypes.TEXT,
      defaultValue: "https://image.url",
      isUrl: true,
    },

    // categoryId:{
    //   type: DataTypes.INTEGER,
    // }
  },
  
);

export default Product;
