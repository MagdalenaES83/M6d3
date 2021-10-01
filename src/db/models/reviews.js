import sequelize from "../index.js";
import s from "sequelize";

const { DataTypes } = s; // WE DECONSTRUCT DATA FORMAT TO USE IT IN THE TAB

//WE CREATE A REVIEW TABLE

//"productId":FOREIGN KEY products

const Review = sequelize.define("review", {
  id: {
    primaryKey: true, // AUTOMATIC CREATE AN ID
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  text: {
    type: DataTypes.TEXT,
    allowNull: false, //IS REQUIRED
  },
  
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  userId: {
    type: DataTypes.INTEGER,
  },
});

export default Review;
