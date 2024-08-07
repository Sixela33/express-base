import { Sequelize } from 'sequelize';
import 'dotenv/config'

const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  storage: 'database.sqlite',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  define: {
    timestamps: true, // Si deseas habilitar automáticamente createdAt y updatedAt
    underscored: true, // Para utilizar snake_case en lugar de camelCase
  },
  logging: false, // Establecer en console.log para ver los logs de SQL
});

export default sequelize;