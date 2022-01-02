import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config';

class User extends Model {}

User.init(
  {
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    active: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    sequelize,
    modelName: 'user',
    timestamps: false,
  }
);

export default User;
