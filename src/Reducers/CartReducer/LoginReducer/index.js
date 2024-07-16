export const LoginReducer = (state, action) => {
  switch (action.type) {
    case "Login": {
      console.log(action.payload);
      return { user: { ...action.payload } };
    }
    case "Logout": {
      return { user: null };
    }
  }
};
