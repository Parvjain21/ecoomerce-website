export const ColorReducer = (state, action) => {
  switch (action.type) {
    case "toggle": {
      if (state.color == "light") {
        localStorage.setItem("color", "dark");
        return { color: "dark" };
      } else {
        localStorage.setItem("color", "light");
        return {
          color: "light",
        };
      }
    }
  }
};
