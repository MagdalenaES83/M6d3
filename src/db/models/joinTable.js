import sequelize from '../index.js'
import s from 'sequelize'
const{DataTypes}=s


//JOIN-TABLE ---> PRODUCT AND CATEGORY 
export const joinTable=sequelize.define(
    'joinTable',{
        associationId:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        
    },
    {timestamps:false}
)