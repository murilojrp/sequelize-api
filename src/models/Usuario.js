import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../config/config";

const Usuario = sequelize.define(
	'usuarios',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false
		},
		password: {
			type: DataTypes.STRING
		}
	},
	{
		freezeTableName: true,
		timestamps: true
	}
);

export default Usuario;