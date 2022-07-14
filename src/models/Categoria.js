import { DataTypes } from "sequelize";
import { sequelize } from "../config/config";

const Categoria = sequelize.define(
    'categorias',
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
        }
    },
    {
        freezeTableName: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
);

export default Categoria;