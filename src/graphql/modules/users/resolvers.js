import User from '../../../models/user';

export default {
  User: {
    fullName: (user) => `${user.firstName} ${user.lastName}`,
  },
  Query: {
    users: async () => await User.findAll(),
    user: async (_, { id }) => await User.findOne({ where: { id } }),
  },
  Mutation: {
    createUser: async (_, { data }) => await User.create(data),
    updateUser: async (_, { id, data }) => {
      const user = await User.findOne({ where: { id } });
      // const dataKeys = Object.keys(data);

      user.firstName = data.firstName;
      user.lastName = data.lastName;
      user.email = data.email;
      user.active = data.active;

      // user[dataKeys[0]] = data[dataKeys[0]] && data[dataKeys[0]];
      // user[dataKeys[1]] = data[dataKeys[1]] && data[dataKeys[1]];
      // user[dataKeys[2]] = data[dataKeys[2]] && data[dataKeys[2]];
      // user[dataKeys[3]] = data[dataKeys[3]] && data[dataKeys[3]];

      await user.save();
      await user.reload();
      return user;
    },
    deleteUser: async (_, { id }) => !!(await User.destroy({ where: { id } })),
  },
};
