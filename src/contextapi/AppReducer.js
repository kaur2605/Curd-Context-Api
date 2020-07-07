export default function AppReducer(state, action) {
  switch (action.type) {
    case "removeUser":
      return {
        users: state.users.filter((user) => user.id !== action.payload),
      };

    case "addUser":
      return {
        users: [action.payload, ...state.users],
      };

    case "editUser":
      const updatedUser = action.payload;

      const updatedUsers = state.users.map((user) => {
        if (user.id === updatedUser.id) {
          return updatedUser;
        } else return user;
      });
      return {
        users: updatedUsers,
      };

    default:
      return state;
  }
}
