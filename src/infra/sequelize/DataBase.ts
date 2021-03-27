import {Sequelize} from 'sequelize';

    
export const DB = new Sequelize('authentication','root','1234',{
    host:"localhost",
    dialect:"mysql",
    logging:false,
    define:{

        timestamps:false

    }
});

//DB.sync({force:true}).then(() => console.log("DataBase was created"));



