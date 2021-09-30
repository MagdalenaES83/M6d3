import Product  from "./products.js"
import Review from "./reviews.js"
import User from "./user.js"
import Category from "./category.js"


// one2many
Product.hasMany(Review)  // create FK
Review.belongsTo(Product) //checking if Fk already exist

User.hasMany(Review, { foreignKey: "userId" })
Review.belongsTo(User , { foreignKey: "userId" })


//1-to-1
//Product.hasOne(Category) 
//Category.belongsTo(Product)


//many2many






export default { Product, Review}