import  sequelize  from "../index.js";
import s from "sequelize";  //WE IMPORT DATA FORMAT 


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
    category: {
      type: DataTypes.STRING,
      allowNull: false,
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

    
  },
  
);

export default Product;
