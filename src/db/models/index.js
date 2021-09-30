import Product  from "./products.js"
import Review from "./reviews.js"

Product.hasMany(Review)  // create FK
Review.belongsTo(Product) //checking if Fk already exist

export default { Product, Review}