import { Sequelize } from 'sequelize';
import 'dotenv/config';

const { SQLITE_DB, SQLITE_USER, SQLITE_PASSWORD, SQLITE_DIALECT, HOSTNAME } = process.env;

const sequelize = new Sequelize(SQLITE_DB, SQLITE_USER, SQLITE_PASSWORD, {
  dialect: SQLITE_DIALECT,
  host: HOSTNAME,
});
sequelize.sync().then(() => console.log('🎲 db is running'));

export default sequelize;
