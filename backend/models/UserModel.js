import { DataTypes } from "sequelize";
import db from "../config/Database.js";

const users = db.define(
	"users",
	{
		name: {
			type: DataTypes.STRING,
		},
		email: {
			type: DataTypes.STRING,
		},
		password: {
			type: DataTypes.STRING,
		},
		refresh_token: {
			type: DataTypes.TEXT,
		},
	},
	{
		freezeTableName: true,
	}
);

export default users;
