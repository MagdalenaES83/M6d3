import { Sequelize } from "sequelize";


//deconstraction of env variables
const { PGPORT, PGHOST, PGPASSWORD, PGUSER, PGDDATABASE } = process.env;


//order same as in decumentation in sequalize
const sequelize = new Sequelize(PGDDATABASE, PGUSER, PGPASSWORD, {
  port: PGPORT,
  host: PGHOST,
  dialect: "postgres",
});


//function to test a connection 
const testDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("DB is authenticated");
  } catch (error) {
    console.log(error);
  }
};
//testDB();



export const connectDB = async () => {
  try {

    //{alter:true}
    await sequelize.sync();  //alter:true update a data
    console.log("DB is connected");
  } catch (error) {
    console.log(error);n 
  }
};

export default sequelize;
