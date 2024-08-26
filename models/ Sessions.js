import { DataTypes } from "sequelize";
import sequelize from "./index.js";


const Session = sequelize.define('Session', {
    sid: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    expires: {
        type: DataTypes.DATE
    },
    data: {
        type: DataTypes.STRING(50000)
    }
});

export default Session