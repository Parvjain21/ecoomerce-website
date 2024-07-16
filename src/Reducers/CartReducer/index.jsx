export const CartReducer = (state, action) => {
  console.log("items = ", state);
  switch (action.type) {
    case "Add": {
      // payload - full item
      const id = action.payload.id;
      const itemIndex = state.findIndex((item) => item.id === id);

      if (itemIndex != -1) {
        state[itemIndex].quantity++;
        return [...state];
      } else {
        const newItem = { ...action.payload, quantity: 1 };
        return [...state, newItem];
      }
    }

    case "Delete": {
      const id = action.payload;
      const itemIndex = state.findIndex((item) => item.id == id);
      if (itemIndex == -1) {
        return state;
      }
      if (state[itemIndex].quantity == 1) {
        const updatedData = state.filter((prod) => prod.id != id);
        console.log("updated data = ", updatedData);
        return updatedData;
      } else {
        state[itemIndex].quantity--;
        return [...state];
      }
    }
    default:
      return state;
  }
};
