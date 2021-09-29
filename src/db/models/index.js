import Product  from "./products.js"
import Review from "./reviews.js"

Product.hasMany(Review)
Review.belongsTo(Product)

export { Product, Review}