import { DataTypes } from "sequelize";
import { sequelize } from "../config/config";

const Autor = sequelize.define(
    'autores',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING(200),
            unique: true,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(200)
        }
    },
    {
        freezeTableName: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
);

export default Autor;