import Product  from "./products.js"
import Review from "./reviews.js"
import User from "./user.js"
import Category from "./category.js"
import {joinTable} from './joinTable.js'
import Cart from './cart.js'



// one2many
Product.hasMany(Review)  // create FK
Review.belongsTo(Product) //checking if Fk already exist

User.hasMany(Review ,  {foreignKey: 'userId'})
Review.belongsTo(User,  {foreignKey: 'userId'})



//cart is a pair of productId and 
User.hasMany(Cart); 
Cart.belongsTo(User); 

Product.hasMany(Cart); 
Cart.belongsTo(Product); 


//many2many

Product.belongsToMany(Category, {through:{model:joinTable,unique:false}}) 
Category.belongsToMany(Product,{through:{model:joinTable,unique:false}})

User.belongsToMany(Product, { through: { model: Cart, unique: false } }); 
Product.belongsToMany(User, { through: { model: Cart, unique: false } }); 





export default { Product, Review, User, Category}