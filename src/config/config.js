import { Sequelize } from "sequelize";
export const sequelize = new Sequelize(
    'crs-api-sequelize', 
    'postgres',
    'unochapeco', 
    {
        host: 'localhost',
        dialect: 'postgres'
    }
);
