
import { DataTypes } from "sequelize";
import { sequelize } from "../config/config";
import Usuario from "./Usuario"

const Emprestimo = sequelize.define(
  'emprestimos',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    prazo: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    devolucao: {
      type: DataTypes.DATEONLY
    }
  },
  {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
);

Emprestimo.belongsTo(Usuario, {
  as: 'usuario',
  foreignKey: {
    name: 'idUsuario',
    allowNull: false,
    field: 'id_usuario'
  }
});

export default Emprestimo;